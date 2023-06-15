import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICatalog, IProduct } from '@app/app/core/interfaces/ICatalog';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { CatalogStore } from '@app/app/core/store/catalog-store';
import { environment } from '@app/environments/environment';
import { Observable, map, merge, mergeMap, switchMap, tap } from 'rxjs';

@Injectable()
export class CatalogService {

  private _order: IOrder[] = [];
  private _total: number = 0;

  constructor(
    private readonly http: HttpClient,
    private readonly catalogStore: CatalogStore,
  ) {
  }

  get(id: string): Observable<ICatalog[]> {
    return this.http.get<ICatalog[]>(`${environment.api}/restaurants/${id}/catalog`)
      .pipe(
        mergeMap((catalog: ICatalog[]) => this.catalogStore.getOrder()
          .pipe(
            map((order: IOrder[]) => {
              let updateCatalog: ICatalog[] = catalog;
              updateCatalog = catalog.map((c: ICatalog) => {
                c.products.map((p: IProduct) => {
                  order.map((o: IOrder) => {
                    if (p.name === o.name) {
                      p.cant = o.cant;
                    }

                  })
                  return p;
                })

                return c
              })

              return updateCatalog;
            })
          )
        ),
        tap((catalog: ICatalog[]) => this.catalogStore.setCatalog(catalog))
      )
  }

  updateOrder(product: IOrder,) {
    if (this._order.length !== 0) {

      const position = this._order.findIndex(p => p.name === product.name)
      if (position != -1) {
        this._order.splice(position, 1);
      }
    }

    if (product.cant > 0)
      this._order.push(product);

    this.updateStore();

  }

  updateStore() {
    this._total = 0;

    for (const product of this._order) {
      this._total += product.price * product.cant;
    }


    this.catalogStore.setOrder(this._order);
    this.catalogStore.setTotal(this._total);
  }

  filter(term: string): Observable<ICatalog[]> {
    return this.catalogStore.getCatalog()
      .pipe(
        tap((data) => console.log(data)),
        map((catalog: ICatalog[]): ICatalog[] => {
          return catalog.reduce((filteredData: ICatalog[], catalog: ICatalog) => {
            const filteredProducts = catalog.products.filter(p => p.name.toLocaleLowerCase().includes(term));

            if (filteredProducts.length > 0) {
              filteredData.push({ name: catalog.name, products: filteredProducts });
            }

            return filteredData;

          }, [])
        }),
        tap((data) => console.log(data))
      );
  }

}

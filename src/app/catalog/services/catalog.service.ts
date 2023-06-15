import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICatalog, IProduct } from '@app/app/core/interfaces/ICatalog';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { CatalogStore } from '@app/app/core/store/catalog-store';
import { environment } from '@app/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CatalogService {

  private _order: IOrder[] = [];
  private _total: number = 0;

  constructor(
    private readonly http: HttpClient,
    private readonly catalogStore: CatalogStore
  ) {
  }

  get(id: string): Observable<ICatalog[]> {
    return this.http.get<ICatalog[]>(`${environment.api}/restaurants/${id}/catalog`)
      .pipe(tap((catalog: ICatalog[]) => this.catalogStore.setCatalog(catalog)));
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

}

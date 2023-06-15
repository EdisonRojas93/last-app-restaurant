import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICatalog } from '../interfaces/ICatalog';
import { CatalogService } from '@app/app/catalog/services/catalog.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {
  private order$: BehaviorSubject<IOrder[]> = new BehaviorSubject<IOrder[]>([]);
  private total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private catalog$: BehaviorSubject<ICatalog[]> = new BehaviorSubject<ICatalog[]>([]);

  private id!: string
  isInit: boolean = false;

  constructor(
    private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id') || '';
  }

  getOrder(): Observable<IOrder[]> {
    return this.order$.asObservable();
  }

  getTotal(): Observable<number> {
    return this.total$.asObservable();
  }

  getCatalog(): Observable<ICatalog[]> {
    return this.catalog$.asObservable();
  }

  setOrder(order: IOrder[]): void {
    this.order$.next(order);
  }

  setTotal(total: number): void {
    this.total$.next(total);
  }

  setCatalog(catalog: ICatalog[]) {
    this.catalog$.next(catalog)
  }

}

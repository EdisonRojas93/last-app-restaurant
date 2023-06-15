import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICatalog } from '../interfaces/ICatalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {
  private order$: BehaviorSubject<IOrder[]> = new BehaviorSubject<IOrder[]>([]);
  private total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private catalog$: BehaviorSubject<ICatalog[]> = new BehaviorSubject<ICatalog[]>([]);

  getOrder():Observable<IOrder[]>{
  return this.order$.asObservable();
  }

  getTotal():Observable<number>{
    return this.total$.asObservable();
  }

  getCatalog(): Observable<ICatalog[]>{
    return this.catalog$.asObservable();
  }

  setOrder(order:IOrder[]):void{
    this.order$.next(order);
  }

  setTotal(total: number): void{
    this.total$.next(total);
  }

  setCatalog(catalog: ICatalog[]){
    this.catalog$.next(catalog)
  }

}

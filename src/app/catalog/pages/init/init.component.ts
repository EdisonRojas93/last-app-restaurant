import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';
import { RestaurantStore } from '@app/app/core/store/restaurant-store';
import { CatalogService } from '../../services/catalog.service';
import { ICatalog } from '@app/app/core/interfaces/ICatalog';
import { Observable, Subscription, of } from 'rxjs';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { CatalogStore } from '@app/app/core/store/catalog-store';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit, OnDestroy {

  @Input() id: string = '';

  totalOrder: number = 0;
  restaurant: IRestaurant | undefined
  catalog$: Observable<ICatalog[]> = of([]);
  activeCategory: number = 0;
  catalogStoreSub: Subscription | undefined;
  searchOpen: boolean = false;

  constructor(private router: Router,
    private restaurantStore: RestaurantStore,
    private catalogService: CatalogService,
    private CatalogStore: CatalogStore,
    private elementRef: ElementRef
  ) {
  }


  ngOnInit(): void {
    this.restaurantStore.getState().subscribe((restaurant: IRestaurant) => {
      console.log('Hola', restaurant);
      
      if(Object.keys(restaurant).length === 0 ){
          this.router.navigateByUrl('/restaurantes');
          return
      }
      
      this.restaurant = restaurant;
      this.catalog$ = this.catalogService.get(this.id);
    });

    this.catalogStoreSub = this.CatalogStore.getTotal().subscribe((total: number) => {
      this.totalOrder = total
    });
  }

  ngOnDestroy(): void {
    this.catalogStoreSub?.unsubscribe();
  }

  order(product: IOrder) {
    console.log(product);
    
    this.catalogService.updateOrder(product)
  }

  back() {
    this.router.navigateByUrl('/restaurantes');
  }

  search() {
    this.router.navigateByUrl(`/restaurante/${this.id}/buscar`);
  }

  filterCategory(name: string) {
    const section = this.elementRef.nativeElement.querySelector(`#${name}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth',block: 'start'  });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const sections = document.querySelectorAll('section'); // Selector de las secciones
   
    sections.forEach((section: HTMLElement, index: number) => {
      const rect = section.getBoundingClientRect();   
      
      if (rect.top <= 160 && rect.top > 0 ) {
        this.activeCategory = index; 
      }
    });
  }

  pay(){
    this.router.navigateByUrl('/pago');
  }
}

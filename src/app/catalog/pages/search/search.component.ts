import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICatalog, IProduct } from '@app/app/core/interfaces/ICatalog';
import { Observable, Subscription, debounceTime, distinctUntilChanged, of } from 'rxjs';
import { CatalogService } from '../../services/catalog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() id: string = '';

  private _result: Observable<ICatalog[]> = of([]);
  loading: boolean = false;
  resultFilter$: Observable<ICatalog[]> = of([]);
  searchControl: FormControl = new FormControl();
  searchResultSub: Subscription | undefined;

  constructor(
    private readonly catalogService: CatalogService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.searchResultSub = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((term: string) => this.search(term));
  }

  ngOnDestroy(): void {
    this.searchResultSub?.unsubscribe();
  }

  search(term: string) {
    this.resultFilter$ = this.catalogService.filter(term);
  }

  close() {
    this.router.navigateByUrl(`/restaurante/${this.id}/catalogo`)
  }

  select(product: IProduct) {
    this.catalogService.updateOrder({
      ...product,
      cant: 1
    })
    this.router.navigateByUrl(`/restaurante/${this.id}/catalogo`)
  }
}
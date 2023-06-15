import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICatalog } from '@app/app/core/interfaces/ICatalog';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories: Observable<ICatalog[]> = of([]);
  @Input() active: number = 0;
  @Output() handlerSelect: EventEmitter<string> = new EventEmitter<string>();

  @Input() set categories(catalog: Observable<ICatalog[]>) {
    this._categories = catalog;
  }

  get categories(): Observable<ICatalog[]> {
    return this._categories
  }

  selected(name: string, position: number) {
    this.active = position;
    this.handlerSelect.emit(name)
  }
}

import { Component, Input } from '@angular/core';
import { IRestaurant } from '../../../core/interfaces/IRestaurant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _restaurant: IRestaurant;

  constructor(){
    this._restaurant = {}
  }

  @Input() set restaurant(value: IRestaurant){
    this._restaurant = value;
  }
  get restaurant(){
    return this._restaurant;
  }
}

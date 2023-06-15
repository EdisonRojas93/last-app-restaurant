import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() total!: Observable<number> 
  @Input() restaurant !:Observable<IRestaurant>;
  @Input() order!:Observable<IOrder[]>

  @Output() handlerPay: EventEmitter<null> = new EventEmitter<null>();

  pay(){
    this.handlerPay.emit()
  }

}

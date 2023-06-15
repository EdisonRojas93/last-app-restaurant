import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order.routing';
import { InitComponent } from './pages/init/init.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CompletedComponent } from './components/completed/completed.component';
import { OrderService } from './services/order.service';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
    declarations: [
    InitComponent,
    ResumeComponent,
    CompletedComponent
  ],
    imports: [ CommonModule, OrderRoutingModule, LoaderModule ],
    exports: [],
    providers: [OrderService],
})
export class OrderModule {}
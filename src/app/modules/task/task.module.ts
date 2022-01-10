import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './pages/task-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StressedRoutingModule } from './stressed-routing.module';
import { SealComponent } from './seal/seal.component';


@NgModule({
  declarations: [
    SealComponent
  ],
  imports: [
    CommonModule,
    StressedRoutingModule
  ]
})
export class StressedModule { }

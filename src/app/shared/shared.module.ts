import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SealComponent } from './seal/seal.component';

@NgModule({
  declarations: [NotFoundComponent, SealComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [],
})
export class SharedModule {}

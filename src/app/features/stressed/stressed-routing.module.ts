import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SealComponent } from './seal/seal.component';

const routes: Routes = [{ path: 'stressed', component: SealComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StressedRoutingModule {}

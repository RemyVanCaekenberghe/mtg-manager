import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule, MatListModule, MatGridListModule } from '@angular/material';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule
];

@NgModule({
  imports: MATERIALCOMPONENTS,
  exports: MATERIALCOMPONENTS
})
export class AppMaterialModule { }

import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: MATERIALCOMPONENTS,
  exports: MATERIALCOMPONENTS
})
export class AppMaterialModule { }

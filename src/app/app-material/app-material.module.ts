import { NgModule } from '@angular/core';
import { MatButtonModule, MatProgressSpinnerModule, MatListModule, MatGridListModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule
];

@NgModule({
  imports: MATERIALCOMPONENTS,
  exports: MATERIALCOMPONENTS
})
export class AppMaterialModule { }

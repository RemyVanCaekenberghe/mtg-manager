import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIALCOMPONENTS = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  imports: MATERIALCOMPONENTS,
  exports: MATERIALCOMPONENTS
})
export class AppMaterialModule {}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { Card } from '../../model/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {

  constructor(public dialogRef: MatDialogRef<CardDetailComponent>, @Inject(MAT_DIALOG_DATA) public card: Card) { }

  onCLick(): void {
    this.dialogRef.close();
  }
}

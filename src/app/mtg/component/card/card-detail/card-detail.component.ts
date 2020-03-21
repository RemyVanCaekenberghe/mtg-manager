import { Legality } from '../../../model/legality';
import { Component, OnInit, Input, Inject, AfterViewInit } from '@angular/core';
import { Card } from '../../../model/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {

  public formats: Array<string>;

  constructor(public dialogRef: MatDialogRef<CardDetailComponent>, @Inject(MAT_DIALOG_DATA) public card: Card) { }

  onCLick(): void {
    this.dialogRef.close();
  }

  public getCardSymbolIdentification(): RegExp {
    return Card.SYMBOL_IDENTIFIER;
  }


}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { Card } from '../../model/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CardDetailComponent>, @Inject(MAT_DIALOG_DATA) public card: Card) { }

  ngOnInit() {
  }

  onCLick(): void {
    this.dialogRef.close();
  }

}

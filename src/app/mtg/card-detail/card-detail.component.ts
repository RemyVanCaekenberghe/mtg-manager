import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input()
  public card: Card;

  constructor() { }

  ngOnInit() {
  }

}

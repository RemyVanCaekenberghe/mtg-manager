import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss']
})
export class CardDescriptionComponent implements OnInit {

  @Input()
  public card: Card;

  constructor() { }

  ngOnInit() {
  }

  public getCardSymbolIdentification(): RegExp {
    return Card.SYMBOL_IDENTIFIER;
  }
}

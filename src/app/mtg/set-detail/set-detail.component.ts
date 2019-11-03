import { Set } from './../model/set';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../service/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent implements OnChanges {

  @Input()
  public set: Set;

  public cards$: Observable<Card[]>;

  public detailedCard: Card;

  constructor(private cardService: CardService) { }

  ngOnChanges() {
    this.cards$ = this.cardService.getCardsBySet(this.set.code);
  }

  public displayDetail(card: Card): void {
    this.detailedCard = card;
  }
}

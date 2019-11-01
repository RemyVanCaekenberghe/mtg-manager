import { Set } from './../model/set';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../service/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent implements OnInit, OnChanges {

  @Input()
  public set: Set;

  public cards$: Observable<Card[]>;

  constructor(private cardService: CardService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.cards$ = this.cardService.getCardsBySet(this.set.code);
  }
}

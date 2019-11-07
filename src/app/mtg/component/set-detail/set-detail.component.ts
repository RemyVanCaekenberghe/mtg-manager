import { Set } from '../../model/set';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { Card } from '../../model/card';
import { CardService } from '../../service';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent implements OnChanges {

  @Input()
  public set: Set;
  public cards: Card[];
  public detailedCard: Card;

  constructor(private cardService: CardService) {}

  ngOnChanges() {
    if(this.set != null) {
      this.emptyCards();

      this.cardService.getCardsBySet(this.set.code).subscribe(cards => {
        this.cards = cards;
      });
    }
  }

  public displayDetail(card: Card): void {
    this.detailedCard = card;
  }

  private emptyCards(): void {
    if(this.cards != null) {
      this.cards.splice(0, this.cards.length);
    }
  }
}

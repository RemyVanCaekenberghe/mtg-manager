import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Set } from 'src/app/mtg/model/set';
import { Card } from 'src/app/mtg/model/card';
import { CardService } from 'src/app/mtg/service';
import { List } from 'src/app/mtg/model/list';
import { CardDetailComponent } from 'src/app/mtg/component/card/card-detail/card-detail.component';
import { Page } from 'src/app/mtg/model/page';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.scss']
})
export class SetDetailComponent implements OnChanges, OnInit {
  @Input()
  public set: Set;
  public cards: Card[];
  public detailedCard: Card;

  public cardsPerLine: number;

  @Input()
  public currentPage: number;

  @Output()
  public page = new EventEmitter<Page>();

  constructor(private cardService: CardService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.setCardsPerLine();
  }

  ngOnChanges() {
    if (this.set != null) {
      this.emptyCards();

      this.cardService
        .getCardsBySet(this.set.code, this.currentPage)
        .subscribe((cards: List<Card>) => {
          this.updateCards(cards);
          const queriedPage = new Page();
          queriedPage.isLastPage = !cards.has_more;
          queriedPage.number = this.currentPage;
          queriedPage.title = this.set.name;

          this.page.emit(queriedPage);
        });
    }
  }

  public displayDetail(card: Card): void {
    this.dialog.open(CardDetailComponent, {
      data: card,
      panelClass: 'card-detail-dialog'
    });
  }

  public onResize(event): void {
    this.setCardsPerLine();
  }

  private emptyCards(): void {
    this.cards = null;
  }

  private updateCards(cards: List<Card>): void {
    this.cards = cards.data;
  }

  private setCardsPerLine(): void {
    this.cardsPerLine = (window.innerWidth / 250);
  }
}

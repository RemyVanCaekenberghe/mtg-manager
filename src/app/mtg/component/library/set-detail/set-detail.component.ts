import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Set } from 'src/app/mtg/model/set';
import { Card } from 'src/app/mtg/model/card';
import { CardService } from 'src/app/mtg/service';
import { List } from 'src/app/mtg/model/list';
import { CardDetailComponent } from 'src/app/mtg/component/card/card-detail/card-detail.component';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.css']
})
export class SetDetailComponent implements OnChanges, OnInit {
  @Input()
  public set: Set;
  public cards: Card[];
  public detailedCard: Card;

  public currentPage: number;
  public nextPage: number;
  public previousPage: number;

  constructor(private cardService: CardService, public dialog: MatDialog) {}

  ngOnInit() {
    this.currentPage = 1;
    this.nextPage = 1;
    this.previousPage = 0;
  }

  ngOnChanges() {
    if (this.set != null) {
      this.currentPage = 1;
      this.emptyCards();

      this.cardService
        .getCardsBySet(this.set.code, this.currentPage)
        .subscribe((cards: List<Card>) => this.updateCards(cards));
    }
  }

  public isNextPage(): boolean {
    return this.nextPage > 1;
  }

  public getNextPage(): void {
    this.emptyCards();
    this.currentPage = this.nextPage;
    this.cardService
      .getCardsBySet(this.set.code, this.nextPage)
      .subscribe((cards: List<Card>) => this.updateCards(cards));
  }

  public isPreviousPage(): boolean {
    return this.previousPage > 0;
  }

  public getPreviousPage(): void {
    this.emptyCards();
    this.currentPage = this.previousPage;
    this.cardService
      .getCardsBySet(this.set.code, this.currentPage)
      .subscribe((cards: List<Card>) => this.updateCards(cards));
  }

  public displayDetail(card: Card): void {
    this.dialog.open(CardDetailComponent, {
      data: card,
      panelClass: 'card-detail-dialog'
    });
  }

  private emptyCards(): void {
    if (this.cards != null) {
      this.cards.splice(0, this.cards.length);
    }
  }

  private updateCards(cards: List<Card>): void {
    this.cards = cards.data;
    this.nextPage = cards.has_more ? this.currentPage + 1 : 1;
    this.previousPage = this.currentPage - 1;
  }
}

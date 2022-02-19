import { Page } from './../../../model/page';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public currentPage: Page;

  @Output()
  public pagetoLoad = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.currentPage = new Page();
  }

  public getNextPage(): void {
    this.pagetoLoad.emit(this.currentPage.number + 1);

    this.currentPage.number = 0;
    this.currentPage.isLastPage = true;
  }

  public isPreviousPage(): boolean {
    return this.currentPage.number > 1;
  }

  public isNextPage(): boolean {
    return !this.currentPage.isLastPage;
  }

  public getPreviousPage(): void {
    this.pagetoLoad.emit(this.currentPage.number - 1);

    this.currentPage.number = 0;
    this.currentPage.isLastPage = true;
  }
}

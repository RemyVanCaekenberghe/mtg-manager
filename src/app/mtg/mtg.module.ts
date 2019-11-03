import { ScryfallSetService } from './service/scryfall-set.service';
import { MockCardService } from './service/mock-card.service';
import { MockSetService } from './service/mock-set.service';
import { SetService } from './service/set.service';
import { MtgRoutingModule } from './mtg-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent } from './set-list/set-list.component';
import { SetDetailComponent } from './set-detail/set-detail.component';
import { SetComponent } from './set/set.component';
import { CardService } from './service/card.service';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SetListComponent, SetDetailComponent, SetComponent, CardDetailComponent],
  imports: [
    CommonModule, MtgRoutingModule, HttpClientModule
  ],
  providers: [
    {provide: SetService, useClass: ScryfallSetService},
    {provide: CardService, useClass: MockCardService}
  ]
})
export class MtgModule { }

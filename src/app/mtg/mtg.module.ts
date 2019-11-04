import { ScryfallSetService } from './service/set/scryfall-set.service';
import { MockCardService, SetService, CardService } from './service';
import { MtgRoutingModule } from './mtg-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent, CardDetailComponent, SetComponent, SetDetailComponent } from './component';
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

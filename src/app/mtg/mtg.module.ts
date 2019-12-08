import { ScryfallSymbolService } from './service/symbol/scryfall-symbol.service';
import { AppMaterialModule } from './../app-material/app-material.module';
import { ScryfallSetService } from './service/set/scryfall-set.service';
import { MockCardService, SetService, CardService } from './service';
import { MtgRoutingModule } from './mtg-routing.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent, CardDetailComponent, SetComponent, SetDetailComponent } from './component';
import { HttpClientModule } from '@angular/common/http';
import { ScryfallCardService } from './service/card/scryfall-card.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ManaCostPipe } from './pipe/mana-cost.pipe';
import { SymbolService } from './service/symbol/symbol.service';


@NgModule({
  declarations: [SetListComponent, SetDetailComponent, SetComponent, CardDetailComponent, ManaCostPipe],
  imports: [
    CommonModule, MtgRoutingModule, HttpClientModule, AppMaterialModule, ReactiveFormsModule
  ],
  providers: [
    {provide: SetService, useClass: ScryfallSetService},
    {provide: CardService, useClass: ScryfallCardService},
    {provide: SymbolService, useClass: ScryfallSymbolService}
  ],
  entryComponents: [
    CardDetailComponent
  ]
})
export class MtgModule { }

import { AppMaterialModule } from './../app-material/app-material.module';
import { ScryfallSetService } from './service/set/scryfall-set.service';
import { MockCardService, SetService, CardService } from './service';
import { MtgRoutingModule } from './mtg-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent, CardDetailComponent, SetComponent, SetDetailComponent } from './component';
import { HttpClientModule } from '@angular/common/http';
import { ScryfallCardService } from './service/card/scryfall-card.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SetListComponent, SetDetailComponent, SetComponent, CardDetailComponent],
  imports: [
    CommonModule, MtgRoutingModule, HttpClientModule, AppMaterialModule, ReactiveFormsModule
  ],
  providers: [
    {provide: SetService, useClass: ScryfallSetService},
    {provide: CardService, useClass: ScryfallCardService}
  ],
  entryComponents: [
    CardDetailComponent
  ]
})
export class MtgModule { }

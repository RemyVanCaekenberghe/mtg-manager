import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SetService, CardService, ScryfallSetService, ScryfallSymbolService, ScryfallCardService, SymbolService } from './service';
import { SetListComponent, CardDetailComponent, SetComponent, SetDetailComponent } from './component';
import { ManaCostPipe } from './pipe';
import { MtgRoutingModule } from './mtg-routing.module';



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

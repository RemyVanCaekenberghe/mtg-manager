import { MockSetService } from './service/mock-set.service';
import { SetService } from './service/set.service';
import { MtgRoutingModule } from './mtg-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent } from './set-list/set-list.component';



@NgModule({
  declarations: [SetListComponent],
  imports: [
    CommonModule, MtgRoutingModule
  ],
  providers: [{provide: SetService, useClass: MockSetService}]
})
export class MtgModule { }

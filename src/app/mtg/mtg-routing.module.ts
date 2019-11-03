import { SetComponent } from './set/set.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetListComponent } from './set-list/set-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/mtg/', pathMatch: 'full'},
  {path: ':code', component: SetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtgRoutingModule { }

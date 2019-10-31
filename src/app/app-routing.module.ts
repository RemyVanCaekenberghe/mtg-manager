import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/mtg', pathMatch: 'full'},
  {path: 'mtg', loadChildren: () => import('./mtg/mtg.module').then(module => module.MtgModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

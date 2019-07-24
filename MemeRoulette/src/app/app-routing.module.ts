import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouletteComponent } from './roulette/roulette.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/roulette',
  pathMatch: 'full'
},
{
  path: 'roulette',
  component: RouletteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

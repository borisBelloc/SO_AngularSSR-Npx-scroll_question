import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }

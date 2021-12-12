import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheesesComponent} from './cheeses/cheeses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';

const routes: Routes = [
  {path: 'cheeses', component: CheesesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: CheeseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

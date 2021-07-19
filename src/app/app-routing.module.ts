import { RaitingComponent } from './raiting/raiting.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'check', component: CheckComponent},
  {path:'rating', component : RaitingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

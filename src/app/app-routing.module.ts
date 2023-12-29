import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchedaComponent } from './pages/scheda/scheda.component';
import { RisultatiComponent } from './pages/risultati/risultati.component';
import { LoginComponent } from './pages/login/login.component';
import { SchedaTelefilmComponent } from './pages/scheda-telefilm/scheda-telefilm.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'scheda/:id',component: SchedaComponent}, 
  {path: 'schedaTelefilm/:id', component: SchedaTelefilmComponent},
  {path:'risultati/:search',component:RisultatiComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

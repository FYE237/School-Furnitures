import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { ListeLivreAttenteComponent } from './liste-livre-attente/liste-livre-attente.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'furnitures/livres',component:ListeLivreComponent},
  {path:'furnitures/livres_attente',component:ListeLivreAttenteComponent},
  {path:'transactions',component:ListeTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


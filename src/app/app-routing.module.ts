import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LivreComponent } from './livre/livre.component';
import { LivreViewComponent } from './livre-view/livre-view.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'furnitures/livres',component:ListeLivreComponent},
  {path:'furnitures/livres/:id',component:LivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


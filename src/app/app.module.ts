import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { LivreComponent } from './livre/livre.component';
import { LivreViewComponent } from './livre-view/livre-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { UserService } from './services/user.service';
import { LivreService } from './services/livre.service';
import { TransactionComponent } from './transaction/transaction.component';
import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { ListeLivreAttenteComponent } from './liste-livre-attente/liste-livre-attente.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListeLivreComponent,
    LivreComponent,
    LivreViewComponent,
    ListeTransactionComponent,
    TransactionComponent,
    ListeLivreAttenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    NgbModule
  ],
  providers: [UserService,LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

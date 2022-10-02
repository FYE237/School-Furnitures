import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { LivreModel } from '../modèles/Livre';
import { UserService } from './user.service';
import { LivreStockModel } from '../modèles/LivreStock';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private livresStock: LivreStockModel[]
  LivreStockSubject = new Subject<LivreStockModel[]>()
  livreStockModel!: LivreStockModel;
  livre:LivreModel|undefined

  private livresAttente: LivreModel[]
  LivreAttenteSubject = new Subject<LivreModel[]>()


  constructor(private  userService:UserService,
    private ngxSpinner:NgxSpinnerService) { 

      this.livresStock=[]
  
  
      this.livresAttente=[]

    }

  async emitLivresStock(){
    this.livresStock=[]
    await fetch(this.userService.getApiUrl()+"/furnitures",{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json',
      //  'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjJjMmFjYjAxMWFhODA5ZTkxNjllNTEiLCJlbWFpbCI6IjRnaXRmYUBnbWFpbC5jb20iLCJwZXJtaXNzaW9uTGV2ZWwiOjIwNDgsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsInJlZnJlc2hLZXkiOiJKOEcxZmtlUXRPQzYrUGpGcW1kbGh3PT0iLCJpYXQiOjE2NDczNDU5NTh9.KGbZPO6OWhS8fVpCbtISIIMhxr3J8b6clP0JEcuqPAk'
        'Authorization':'Bearer '+ window.sessionStorage.getItem("token")
      },
    })
    .then((res)=>{return res.json()})
    .then((resJSON)=>
      {
        resJSON.forEach((element: any) => {
       
            this.livreStockModel={
              Id:element._id,
              auteur:element.autheur,
              intitule:element.intitule,
              maisonEdition:element.maisonEdition,
              prix:element.prix,
              recu:element.recu,
              photo:element.avatar
            }
            
            this.livresStock.push(this.livreStockModel)
             // console.log(this.livresStock)
              this.LivreStockSubject.next(this.livresStock.slice())
              this.ngxSpinner.show()
            setTimeout(() => {
              this.ngxSpinner.hide()
             },1000);
          });
      
  })
  }

  async emitLivresAttente(){
   this.livresAttente=[]
     await fetch(this.userService.getApiUrl()+"/furnitures/unavailables",{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'Accept':'application/json',
        //  'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjJjMmFjYjAxMWFhODA5ZTkxNjllNTEiLCJlbWFpbCI6IjRnaXRmYUBnbWFpbC5jb20iLCJwZXJtaXNzaW9uTGV2ZWwiOjIwNDgsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsInJlZnJlc2hLZXkiOiJKOEcxZmtlUXRPQzYrUGpGcW1kbGh3PT0iLCJpYXQiOjE2NDczNDU5NTh9.KGbZPO6OWhS8fVpCbtISIIMhxr3J8b6clP0JEcuqPAk'
          'Authorization':'Bearer '+ window.sessionStorage.getItem("token")
        },
      })
      .then((res)=>{return res.json()})
      .then((resJSON)=>
        {
          resJSON.forEach((element: any) => {
            
              this.livre={
                Id:element._id,
                auteur:element.autheur,
                intitule:element.intitule,
                lieuStockage:element.lieuStockage.lieu,
                maisonEdition:element.maisonEdition,
                prix:element.prix,
                proprietaire:element.proprietaire.firstName +" "+ element.proprietaire.lastName,
                type:element.type,
                matiere:element.matiere,
                recu:element.recu,
                photo:element.avatar
              }
             
              this.livresAttente.push(this.livre)
               
                this.LivreAttenteSubject.next(this.livresAttente.slice())
                this.ngxSpinner.show()
              setTimeout(() => {
                this.ngxSpinner.hide()
               },1000);
            });
           // console.log(this.livresAttente)

    } )


 

  }

}

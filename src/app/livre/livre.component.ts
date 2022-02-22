import { Component, Input, OnInit } from '@angular/core';
import { LivreModel } from '../modèles/Livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {


  @Input() livreName: string|undefined
  @Input() livrePrix:number|undefined 
  /*
    public auteur: string,public intitule: string,
            public lieuStockage:string
            ,public maisonEdition:string,
            public prix:number,public propriétaire:string,
            public type:string,public recu:boolean
  */


  
  constructor() { }

  ngOnInit(): void {
  }

}

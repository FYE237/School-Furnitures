import { Component, OnInit, ViewChild } from '@angular/core';
import { LivreModel } from '../modèles/Livre';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
//import {MatSort} from '@angular/material'

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit {

  //@ViewChild(MatPaginator) paginator: MatPaginator
  //@ViewChild(Matsort) sort: Matsort
  

  p:any;
  livres=/*  LivreModel[]= */[
    {
      auteur:"gdfs",
      intitule:"jhdfjhsf",
      lieuStockage:"dsjfks",
      maisonEdition:"djf",
      prix:500,
      propriétaire:"FYE",
      type:"Livre",
      recu:false
    },
    {
      auteur:"gdfs",
      intitule:"jhdfjhsf",
      lieuStockage:"dsjfks",
      maisonEdition:"djf",
      prix:500,
      propriétaire:"FYE",
      type:"Livre",
      recu:false
    },
    {
      auteur:"gdfs",
      intitule:"jhdfjhsf",
      lieuStockage:"dsjfks",
      maisonEdition:"djf",
      prix:500,
      propriétaire:"FYE",
      type:"Livre",
      recu:false
    },
    {
      auteur:"gdfs",
      intitule:"jhdfjhsf",
      lieuStockage:"dsjfks",
      maisonEdition:"djf",
      prix:500,
      propriétaire:"FYE",
      type:"Livre",
      recu:false
    },
  ]

  constructor() { }

  ngOnInit(): void {
    //this.livres.paginator = 
  }

}


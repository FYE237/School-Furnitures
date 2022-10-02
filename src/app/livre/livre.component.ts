import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivreModel } from '../modèles/Livre';
import { UserModel } from '../modèles/User';
import { LivreService } from '../services/livre.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  closeResult!: string;

  @Input() livreName!: string//|undefined
  @Input() livreAuteur!: string
  @Input() livrePrix!:number//|undefined 
  @Input() livrePhoto!:string//|undefined
  @Input()livreId!: string; //|undefined
//|undefined
  @Input() livreRecu!: boolean;
  @Input() livreMaisonEdition!:string
  @Input() livreProprietaire!:UserModel
  @Input() livreLieuStockage!:string
  @Input() livreMatiere!:string
  @Input() source!:string

  /*
    public auteur: string,public intitule: string,
            public lieuStockage:string
            ,public maisonEdition:string,
            public prix:number,public propriétaire:string,
            public type:string,public recu:boolean
  */


  
  constructor(private modalService: NgbModal,
    private userService: UserService,
    private router:Router,
    private livreService: LivreService) { }

  ngOnInit(): void {
    // console.log(this.source)
  }

  openFurnituresDetails(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }


  async validateFurnitures(livreId : string){

    fetch(this.userService.getApiUrl()+"/furnitures/"+this.livreId,{
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+ window.sessionStorage.getItem("token")
      },
      body:JSON.stringify({recu:"true"})
    })
   
    .then((res)=>this.modalService.dismissAll(ModalDismissReasons.ESC))
    this.router.navigate(["furnitures/livres"])

  }
}

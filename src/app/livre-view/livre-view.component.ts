import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-livre-view',
  templateUrl: './livre-view.component.html',
  styleUrls: ['./livre-view.component.css']
})
export class LivreViewComponent implements OnInit {

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    //console.log("UserLogin :  ",this.userService.isAuth)
  }

  goHome(){
    this.router.navigate(["furnitures/livres"])
  }

  seeFurnitures(){

  }

  seeHistoric(){
    
          this.router.navigate(['transactions'])

  }

  seeProfil(){
    

  }

  goToProduitEnStock(){
    
        //console.log("stock")
        this.router.navigate(['furnitures/livres'])
    }
  

  goToProduitEnAttente(){
    
          //console.log('Attente')
          this.router.navigate(["furnitures/livres_attente"])
         
        
      }

  logOut(){
    this.userService.isAuth=false
    this.router.navigate([''])

  }

}

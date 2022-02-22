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
  }

  goHome(){
    this.router.navigate(["furnitures/livres"])
  }

  seeFurnitures(){

  }

  seeHistoric(){

  }

  seeProfil(){

  }

  logOut(){
    this.userService.isAuth=false
    this.router.navigate([''])

  }

}

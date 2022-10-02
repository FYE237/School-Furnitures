import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../modèles/User';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  hide=true;
  message="";

  constructor(private formBuilder: FormBuilder,private router: Router,
    private ngxSpinner:NgxSpinnerService,         
    private userService:UserService) {this.userService.isAuth=false }

  ngOnInit(): void {
  
    this.initForm()
  }

  initForm(){
    this.userForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),]]
    })
    this.message="";
  }

 

  onSubmitForm(){
    const formValue= this.userForm.value;
    const newUser=new UserModel(
      formValue['email'],
      formValue['password']
    )
    this.userService.userLogin(newUser)
    this.ngxSpinner.show()
    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.ngxSpinner.hide(); 
      // this.message=this.userService.message 
      if(this.userService.isAuth==true){
       // console.log(JSON.stringify({email:newUser.email,password:newUser.password}))
        this.router.navigate(['/furnitures/livres']);
        // this.message="";
      }
      else alert("ERROR")
    }, 3000);
  
  }
  
  
 
}

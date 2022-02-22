import { Injectable } from '@angular/core';
import { UserModel } from "../modèles/User";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth=false
  message=""
  private apiurl =""

  constructor(private http: HttpClient) { }

  userLogin(user:UserModel){
    if((user.email==="yfezeu.emma@gmail.com")&&(user.password==="123456"))
       {
             this.isAuth=true,
              this.message=""
              console.log(this.isAuth)
              /*  this.httpClient.post(this.apiurl,user)
      .then(()=>{})
      .catch(()=>{})
  */
       }
        else this.message="User not correct"
  }

  

}



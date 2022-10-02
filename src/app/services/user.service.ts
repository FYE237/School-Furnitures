import { Injectable } from '@angular/core';
import { UserModel } from "../modèles/User";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth=false
  message=""
  private apiurl ="https://easy-buy-po.herokuapp.com"
  private accessToken=""

  constructor(private http: HttpClient) { }

  userLogin(user:UserModel){

    fetch(this.apiurl+"/auth",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then((res) => {
      if(res.status==201) {
        this.isAuth=true
        return res.json()
      }
      else {
        this.isAuth=false
        // this.message="ERROR"
        return ""
      }
     /*  console.log(res.json()) */
      
    })
    .then((data)=>{
      sessionStorage.setItem("token",data.accessToken)
      console.log(this.accessToken)
    })
  
    
  }

  getApiUrl() {
    return this.apiurl
  }

  // getAccesToken() {
  //   return this.accessToken
  // }

}



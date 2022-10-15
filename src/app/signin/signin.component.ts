import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {HttpClient } from '@angular/common/http'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private route:Router) { }


  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
    
      email:[''],
      password:[''],
      
  }
  )
  }
  login(){
    this.http.get<any>('http://localhost:3000/user').
    subscribe(res=>
      {
        const user=res.find((a:any)=>{
       return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
      }
      )
      if(user){
        alert("user is existed");
      }else{
        alert("user does not exist");
      }

      })
    }
  }
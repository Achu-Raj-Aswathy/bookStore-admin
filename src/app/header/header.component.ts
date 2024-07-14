import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private route:Router){}
  ngOnInit(): void {
    if(sessionStorage.getItem("token")){
      this.isLoggedIn = true;
    }
  }
  logout(){
    this.route.navigateByUrl('/');
    sessionStorage.removeItem("token")
  }
}

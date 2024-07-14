import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: any = {
    id: "",
    bookName: "",
    author: "",
    price: "",
    coverImg:""
  }
  constructor(private api:ApiService, private route:Router){}
  clearFields(){}
  addBook(){
    this.api.addBookApi(this.book).subscribe({
      next:(res:any) => {
        alert("Book added successfully")
        this.book = {}
        this.route.navigateByUrl("dashboard")
      },
      error:(res:any)=>{
        alert(res.error)
      }
    })
  }
  backToHome(){
    this.route.navigateByUrl("dashboard")
  }
}

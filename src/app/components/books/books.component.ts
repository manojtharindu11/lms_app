import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public books_service:BooksService) {}

  ngOnInit(): void {
    this.ResetForm();
  }

  ResetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.books_service.formData={
      Id:0,
      BookCode:'',
      BookName:'',
      BookCount:0
    }
  }

  OnSubmit(form:NgForm) {
    console.log("clicked");
    this.InsertBooks();
  }

  InsertBooks(){
    this.books_service.insertBooks().subscribe(
      (res:any)=>{
        console.log("success");
      },
      err=> {
        console.log("failed");
        console.log(err);
      }
    )
  }

}

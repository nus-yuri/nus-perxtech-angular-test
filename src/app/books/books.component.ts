import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  items;

  constructor(
    private bookService: BookService
  ) {
    this.getItems()
  }

  ngOnInit() {
  }

  onSort(){
    this.getItems()
  }

  getItems(){
    this.items = this.bookService.getItems();
  }

}

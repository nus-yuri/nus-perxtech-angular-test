import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss']
})
export class BooksFilterComponent implements OnInit {
  @Output() notify = new EventEmitter();

  filterData = {
    type: 'All'
  }

  typeOptions = ["All", "Hard cover", "Soft cover"]

  constructor(
    private bookService: BookService,
  ) {
    this.getFilter();
  }

  ngOnInit() {
    this.getFilter();
  }

  getFilter(){
    this.filterData.type = this.bookService.getFilter('type');
  }

  setFilter(name){
    this.bookService.setFilter(name, this.filterData[name]);
    this.notify.emit();
  }

}

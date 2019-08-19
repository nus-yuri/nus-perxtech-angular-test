import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-sort',
  templateUrl: './books-sort.component.html',
  styleUrls: ['./books-sort.component.scss']
})
export class BooksSortComponent implements OnInit {
  @Output() notify = new EventEmitter();

  sortData = {
    createdAt: 'asc'
  };

  sortOptions = [
    {name: 'ASC', value: 'asc'},
    {name: 'DESC', value: 'desc'}
  ]

  constructor(
    private bookService: BookService,
  ) {
    this.getSort()
  }

  ngOnInit() {
    this.getSort()
  }

  getSort(){
    this.sortData.createdAt = this.bookService.getSort('createdAt');
  }

  setSort(name){
    this.bookService.setSort(name, this.sortData[name]);
    this.notify.emit();
  }

}

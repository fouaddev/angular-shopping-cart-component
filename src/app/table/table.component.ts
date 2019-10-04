import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  books: any[];
  title: any;
  price: any;
  qty: any;
  total: any;
  count: any;
  orderTotal: any;

  constructor() {
    this.title = 'Your Title Here';
    this.price = 10.99;
    this.qty = 1;
    this.total = this.price * this.qty;
    
    this.books = [{
      title: this.title,
      price: this.price,
      qty: this.qty,
      total: this.total
    }];
    
    this.count = this.books.length;

    this.orderTotal = 0;
    for(let i = 0; i < this.count; i++) {
      this.orderTotal += this.books[i].total;
    }
  }

  ngOnInit() {
    
  }

  addBook() {
    
  }
}

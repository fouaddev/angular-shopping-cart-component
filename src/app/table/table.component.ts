import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  books: any[] = [];
  defaultBook: any;

  constructor() {
    this.defaultBook = {
      title: 'Your book Title',
      price: 10.99,
      qty: 1
    }
  }

  ngOnInit() {

  }

  booksTotal(): number {
    let total = 0;
    for(let i = 0; i < this.books.length; i++) {
      total += this.books[i].price * this.books[i].qty;
    }

    return total;
  }

  booksCount(): number {
    let count = 0;
    for(let i = 0; i < this.books.length; i++) {
      count += this.books[i].qty;
    }
    return count;
  }

  addBook(): void {
    this.books.push(this.defaultBook);

    this.defaultBook = {
      title: 'Your book Title',
      price: 10.99,
      qty: 1
    };
  }

  deleteBook(e): void {
    this.books.splice(e, 1);
  }
}

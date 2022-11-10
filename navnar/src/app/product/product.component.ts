import { OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  shortcode: string;
  price: number;
  quantity: number;
  date: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'pen', shortcode: 'pe-12', price: 15, quantity: 200, date:'11 nov 2022'},
  {name: 'pencil', shortcode: 'peci-12', price: 16, quantity: 200, date:'11 nov 2022'},
  {name: 'notes', shortcode: 'no-12', price: 17, quantity: 200, date:'11 nov 2022'},
  {name: 'phone', shortcode: 'ph-12', price: 12, quantity: 200, date:'11 nov 2022'},
  {name: 'headphone', shortcode: 'pe-12', price: 2, quantity: 200, date:'11 nov 2022'},
  {name: 'charger', shortcode: 'cg-12', price: 2, quantity: 200, date:'11 nov 2022'},

];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['name', 'shortcode', 'price', 'quantity' , 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

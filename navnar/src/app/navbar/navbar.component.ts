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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'shortcode', 'price', 'quantity' , 'date','edit','deletes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  

  
  getRecord(edit:string)
  {
    alert(edit);
  }
  getRec(deletes:string)
  {
    alert(deletes);
  }
  addData(){

  }
 

}

import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-adpro',
  templateUrl: './adpro.component.html',
  styleUrls: ['./adpro.component.css']
})
export class AdproComponent implements OnInit {
  
  userForm : FormGroup;
  listData:any;
  

  constructor(private fb:FormBuilder) { 
    this.listData = [];
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      shortcode: ['',Validators.required],
      price: ['',Validators.required],
      quantity: ['',Validators.required],
      date: ['',Validators.required],
      
    })
  }
  public addItem():void{
    this.listData.push(this.userForm.value);

  }

  ngOnInit(): void {
  }

}

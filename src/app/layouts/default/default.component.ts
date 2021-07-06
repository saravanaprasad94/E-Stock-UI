import { Component, OnInit, Inject } from '@angular/core';
import {AddCompanyComponent} from 'src/app/layouts/add-company/add-company.component'
import {AddStockComponent} from 'src/app/layouts/add-stock/add-stock.component'
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA = [
  {stockprice: 234, date: '07/01/2021', time: 11.00 },
  {stockprice: 232, date: '07/02/2021', time: 14.00},
  {stockprice: 333, date: '07/03/2021', time: 16.94},
  {stockprice: 236, date: '07/04/2021', time: 19.01},  
];
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})


export class DefaultComponent implements OnInit {
  displayedColumns: string[] = ['stockprice', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  sideBarOpen = true;
  list=true
  constructor(private dialog: MatDialog) { }  
  ngOnInit(): void {
  }
  
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen
    
  } 
  open_detail(){
    this.list=false;
  }
  open_list(){
    this.list=true;
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      'ceo': "Sara",
      'code': "ASL",
      'companyUrl': 'as.com',
      'enlisted': '2021',
      'name': "ICICI",
      'turnover': '200000'
    }
    
    this.dialog.open(AddCompanyComponent, dialogConfig);
    const dialogRef = this.dialog.open(AddCompanyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );   
}
openDialog1() {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    'companyCode': "ASL",
    'date': "ASL",
    'price': 'as.com',
    'time': '2021',
    'timestamp': "ICICI"
    }
  
  this.dialog.open(AddStockComponent, dialogConfig);
  const dialogRef = this.dialog.open(AddStockComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );   
}
}

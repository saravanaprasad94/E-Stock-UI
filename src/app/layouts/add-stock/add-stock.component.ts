import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup,Validators, FormBuilder } from '@angular/forms' 

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  form: FormGroup;
  description:string;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddStockComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  this.description = "Stock Data";


  this.form = fb.group({
      companyCode: [ null, Validators.required],
      date: [ null,Validators.required],      
      price: [null, Validators.required],
      time: [null, Validators.required],
      timestamp: [null, Validators.required]
      
  });

}


  ngOnInit(): void {
  }
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}

import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup,Validators, FormBuilder } from '@angular/forms' 

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  form: FormGroup;
  description:string;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  this.description = "Company Data";


  this.form = fb.group({
      ceo: [data.ceo, Validators.required],
      code: [data.code, Validators.required],      
      companyUrl: [data.companyUrl,Validators.required],
      enlisted: [data.enlisted,Validators.required],
      name: [data.name,Validators.required],
      turnover: [data.turnover,Validators.required]
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

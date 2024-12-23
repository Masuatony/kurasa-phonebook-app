import {Component, EventEmitter, Inject, Input, OnInit, Output, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {ActivatedRoute, Params} from "@angular/router";
import {ContactsService} from "../../service/contact-service";
import {Contact} from "../contact";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIcon,
    MatCard,
    MatCardTitle,
    MatDivider,
    MatCardContent
  ],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.scss'
})
export class CreateContactComponent implements OnInit{
  pageFunction: string = '';
  contactsArray = signal<Contact[]>([]);
  @Output() shouldSelectExistingBorrower = new EventEmitter<boolean>();
   parentFormGroup: FormGroup | undefined;
   title: string = '';
   formData: any;
   constructor(
     private _fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<CreateContactComponent>
     ) {
   }
   ngOnInit() {
     this.pageFunction = this.data.action;
     this.title = this.data.title;
     this.formData = this.data.data;
     this.handleFormInit();
   }

   handleFormInit = () => {
     if (this.pageFunction.includes('New')) {
       this.parentFormGroup = this._fb.group({
         firstName: new FormControl("", Validators.required),
         lastName: new FormControl("", Validators.required),
         phone: new FormControl("", Validators.required),
         email: new FormControl("", Validators.required),
         address: new FormControl("", Validators.required),
       });
     } else {
       this.parentFormGroup = this._fb.group({
         firstName: [this.formData.firstName, Validators.required],
         lastName: [this.formData.lastName, Validators.required],
         phone: [this.formData.phone, Validators.required],
         email: [this.formData.email,Validators.required],
         address: [this.formData.address, Validators.required],
         id: [this.formData.id, Validators.required],
         status: [this.formData.status, Validators.required],
         lastUpdated: [new Date(), Validators.required],
         createdAt: [this.formData.createdAt, Validators.required],
       });
     }
   }

   submitForm = () => {
      if (this.parentFormGroup?.valid) {
        this.dialogRef.close(
          this.parentFormGroup.value
        );
      }
   }

}

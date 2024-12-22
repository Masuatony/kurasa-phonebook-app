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
     private route: ActivatedRoute,
     @Inject(MAT_DIALOG_DATA) public data: any,
     // private notification: Notification,
     public dialogRef: MatDialogRef<CreateContactComponent>
     ) {
   }
   ngOnInit() {
     // if (!this.route.queryParams) this.pageFunction = 'Add';
     // this.route.queryParams.subscribe({
     //   next: (params: Params) => {
     //     if (Object.prototype.hasOwnProperty.call(params, 'rowData')) {
     //       this.pageFunction = params['action'];
     //       this.formData = JSON.parse(params['rowData']);
     //     }
     //   },
     // });
     this.pageFunction = this.data.action;
     this.title = this.data.title;
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
         firstName: new FormControl("", Validators.required),
         lastName: new FormControl("", Validators.required),
         phone: new FormControl("", Validators.required),
         email: new FormControl("", Validators.required),
         address: new FormControl("", Validators.required),
         existingBorrower: new FormControl(false),
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

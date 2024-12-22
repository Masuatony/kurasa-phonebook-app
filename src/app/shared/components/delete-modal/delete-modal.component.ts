import { Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatDivider],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent implements OnInit {
  pageFunction: string = '';
  deleteText = 'This cant be undone!';
  deleteModule: string = '';
  rowData: any;
  loading: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
  ) {}
  ngOnInit() {
    this.pageFunction = this.data.action;
    this.deleteModule = this.data.deleteModule;
    this.rowData = this.data.rowData;
    this.deleteText = this.data.message;
  }

  deleteModuleRequest() {
    this.dialogRef.close({
      action: 'delete',
      rowData: this.rowData,
    })
  }
}

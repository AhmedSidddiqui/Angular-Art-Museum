import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-button-details',
  templateUrl: './buttonDetails.component.html',
  styleUrls: ['./buttonDetails.component.css']
})
export class ButtonDetailsComponent {
  constructor(public dialogRef: MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  onOkayClicked(){
    console.log("Okay clicked");
  }

}

import { Component, Input } from '@angular/core';
import { MyDetails } from '../myInterfaces/interface';
import { MatDialog } from "@angular/material/dialog";
import { ButtonDetailsComponent } from "../buttonDetails/buttonDetails.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() myDetails!: MyDetails;

  constructor(public dialog: MatDialog){}


  clickDetails(){
    const dialogRef = this.dialog.open(ButtonDetailsComponent, {data: this.myDetails, width: '450px', height: '350px'});
  }
}



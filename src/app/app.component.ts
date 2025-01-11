import { Component } from "@angular/core";
import { MyDetails } from "./modules/myInterfaces/interface";
import A4 from "../assets/data/A4.json";
import { CulturesFeatured } from "./modules/myInterfaces/tabsInterface";
import { ArtDetails } from "./modules/myInterfaces/tabsInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'A4Siddiq57';
  myDetails: MyDetails = A4.myDetails;
  cultures: CulturesFeatured[] = A4.culturesFeatured;
  art: ArtDetails[] = A4.artDetails;
};




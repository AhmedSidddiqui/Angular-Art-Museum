import { Component, Input } from '@angular/core';
import { ArtDetails } from '../myInterfaces/tabsInterface';

@Component({
  selector: 'app-art-exhibit',
  templateUrl: './art-exhibit.component.html',
  styleUrls: ['./art-exhibit.component.css']
})
export class ArtExhibitComponent {
  @Input() artDetails!: ArtDetails[];
}

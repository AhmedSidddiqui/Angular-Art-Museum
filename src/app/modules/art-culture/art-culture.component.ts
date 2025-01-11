import { Component, Input } from '@angular/core';
import { CulturesFeatured } from '../myInterfaces/tabsInterface';
import { ArtDetails } from "../myInterfaces/tabsInterface";

@Component({
  selector: 'app-art-culture',
  templateUrl: './art-culture.component.html',
  styleUrls: ['./art-culture.component.css']
})
export class ArtCultureComponent {
  @Input() artDetails!: ArtDetails[];
  @Input() culturesFeatured!: {culture : string}[];
  selectedCultureArt: string = '';

  showCulture(index: number): void{
    const selectedCulture = this.culturesFeatured[index].culture;
    this.selectedCultureArt = `<h3>${selectedCulture}'s Culture Art</h3>`;
    
    for(const art of this.artDetails){
      if(art.culture === selectedCulture){
        this.selectedCultureArt += `
            <li><strong>ID:</strong> ${art.id}</li>
            <li><strong>Title:</strong> <a href="${art.url}" target="_blank">${art.title}</a></li>
            <li><strong>Creator:</strong> ${art.creator}</li>
            <li><strong>Creation Date:</strong> ${art.creation_date}</li>
            <li><strong>Technique:</strong> ${art.technique}</li>
            <li><strong>Desciption:</strong> ${art.description}</li><br><br>
        `;
      }
    }
    this.selectedCultureArt += '</ul>';
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'; 
import { MaterialModule} from './modules/material-ui/material-ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header.component';
import { ButtonDetailsComponent } from './modules/buttonDetails/buttonDetails.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ArtExhibitComponent } from './modules/art-exhibit/art-exhibit.component';
import { ArtCultureComponent } from './modules/art-culture/art-culture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonDetailsComponent,
    FooterComponent,
    ArtExhibitComponent,
    ArtCultureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

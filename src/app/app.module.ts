import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GearComponent } from './navbar/gear/gear.component';
import { OptionsComponent } from './navbar/options/options.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GearComponent,
    OptionsComponent,
    RicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

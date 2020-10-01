import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GearComponent } from './navbar/gear/gear.component';
import { OptionsComponent } from './navbar/options/options.component';
import { HttpClientModule } from '@angular/common/http';
import { MiddleComponent } from './middle/middle.component';
import { RicercaComponent } from './middle/ricerca/ricerca.component';
import { ListaComponent } from './middle/lista/lista.component';
import { DetailComponent } from './middle/detail/detail.component';
import { DetailheadComponent } from './middle/detail/detailhead/detailhead.component';
import { DetailbodyComponent } from './middle/detail/detailbody/detailbody.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GearComponent,
    OptionsComponent,
    MiddleComponent,
    RicercaComponent,
    ListaComponent,
    DetailComponent,
    DetailheadComponent,
    DetailbodyComponent
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

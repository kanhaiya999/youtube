import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreeboxComponent } from './threebox/threebox.component';
import { OffersComponent } from './offers/offers.component';
import { CountwebComponent } from './countweb/countweb.component';
import { PriceBoxComponent } from './price-box/price-box.component';
import { ClientComponent } from './client/client.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThreeboxComponent,
    OffersComponent,
    CountwebComponent,
    PriceBoxComponent,
    ClientComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RadioComponent } from './components/radio/radio.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeachComponent } from './components/teach/teach.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadioComponent,
    ContactComponent,
    TeachComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

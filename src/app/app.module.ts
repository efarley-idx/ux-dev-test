import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { routes } from './app.routes';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { CustomerModule } from './modules/customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomerModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { routes } from './app.routes';
import { WelcomeModule } from './modules/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

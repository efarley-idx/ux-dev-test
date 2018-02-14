import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { RouterModule, RouterLink } from '@angular/router';
import { routes } from './app.routes';
import { WelcomeModule } from './modules/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

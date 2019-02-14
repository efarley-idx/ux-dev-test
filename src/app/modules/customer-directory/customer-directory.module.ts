import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDirectoryComponent } from './customer-directory.component';
import { CustomerComponent } from './customer.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [CustomerDirectoryComponent, CustomerComponent]
})
export class CustomerDirectoryModule { }

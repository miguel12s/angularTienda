import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materialModule/material.module';
import {HttpClientModule} from '@angular/common/http'
import { productService } from './services/product.service';
import { DescripcionComponent } from './descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],

 

  
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }

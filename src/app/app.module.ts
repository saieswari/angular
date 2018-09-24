import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from  '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { BuyComponent } from './buy/buy.component';
import { ViewComponent } from './view/view.component';
import { Product1Component } from './product1/product1.component';
import { Buy1Component } from './buy1/buy1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DetailsComponent,
    BuyComponent,
    ViewComponent,
    Product1Component,
    Buy1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { BuyComponent } from '../buy/buy.component';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';
import { ViewComponent } from '../view/view.component';
import { Product1Component } from '../product1/product1.component';
import { Buy1Component } from '../buy1/buy1.component';



const routes:Routes=[
  //{path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'buy/:id',component:BuyComponent},
   {path:'buy1/:id',component:Buy1Component},
  {path:'detail/:id',component:DetailsComponent},
  
  {path:'product1',component:Product1Component},
  {path:'view',component:ViewComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

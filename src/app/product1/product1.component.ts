import { Component, OnInit } from '@angular/core';
import {Product} from  '../detail';
import{ProductService } from '../product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  products:Product[];

  constructor(public pservice:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.pservice.getProducts1().subscribe(products=> this.products=products);
  }

}

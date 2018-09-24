import { Component, OnInit } from '@angular/core';
import {Product} from  '../detail';
import{ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];

  constructor(public pservice:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():void{
    this.pservice.getProducts().subscribe(products=> this.products=products);
  }
}

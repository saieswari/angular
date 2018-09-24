import { Component, OnInit } from '@angular/core';
import {Product} from '../detail';
import {ActivatedRoute} from '@angular/router';
import{ProductService } from '../product.service';

@Component({
  selector: 'app-buy1',
  templateUrl: './buy1.component.html',
  styleUrls: ['./buy1.component.css']
})
export class Buy1Component implements OnInit {

  product:Product;
  

  constructor(private activatedroute:ActivatedRoute,
    private pservice:ProductService) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct():void{
    const id=+this.activatedroute.snapshot.paramMap.get('id');
    this.pservice.getProduct2(id).subscribe(product => this.product=product );
  }

}

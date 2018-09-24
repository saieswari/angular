import { Component, OnInit } from '@angular/core';
import {Product} from '../detail';
import {ActivatedRoute} from '@angular/router';
import{ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:Product;
  total:number;

  constructor(private activatedroute:ActivatedRoute,
    private pservice:ProductService) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct():void{
    const id=+this.activatedroute.snapshot.paramMap.get('id');
    this.pservice.getProduct(id).subscribe(product => this.product=product );
  }

}

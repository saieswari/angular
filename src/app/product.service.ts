import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Product} from  './detail';
import {LIST} from  './productlist';
import {LIST1} from  './productlist1';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  getProducts():Observable<Product[]>
  {
    return of(LIST);
  }

  getProduct(id:number):Observable<Product>{

    return of(LIST.find(product=>product.id===id));
  }
  getProducts1():Observable<Product[]>
  {
    return of(LIST1);
  }

  getProduct2(id:number):Observable<Product>{

    return of(LIST1.find(product=>product.id===id));
  }
}


import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from './../../service/products.service';

import 'datatables.net';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  orderedProducts: any;

  public names: String[] = []
  public price: String[] = []
  public cartItems:any;
  public item: any
  public totalMoney: any = 0;
  public items: any
  constructor(public productService: ProductsService) {
  }

  /* 
  */


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

  removeItem(title:any){
    console.log(title);
    console.log(typeof(title));
    this.productService.removeItem(title)
    // this.productService.getCartProducts()
  }


}



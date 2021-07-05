
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from './../../service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public names: String[] = []
  public price: String[] = []
  public cartItems:any;
  public item: any
  public totalMoney: any = 0;
  public items: any
  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    // this.cartItems = this.productService.cartProducts
  }

  removeItem(title:any){
    console.log(title);
    console.log(typeof(title));
    this.productService.removeItem(title)
    // this.productService.getCartProducts()
  }


}



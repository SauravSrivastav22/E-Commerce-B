import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  orderedProducts:any;
  
  constructor(private productsService:ProductsService) { 
    
    this.productsService.getTotalOrderedProducts().subscribe((res)=>{
      console.log(res);
      this.orderedProducts = res;
    } , (err)=>{
      console.log(err);
    })
  }
  
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    }
}
}

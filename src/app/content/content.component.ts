import { Component, OnInit } from '@angular/core';
import { ProductFilterPipe } from '../product-filter.pipe';
import { ProductService } from '../product.service';
import { Product } from './product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ProductService]
})
export class ContentComponent implements OnInit {
   productTitle: string="Ürünler"
   products: Product[]
   filterText=""
   

  constructor(private ps: ProductService ) { }

  ngOnInit(){
    this.ps.getProducts()
    .subscribe(data=>{
      this.products=data
      //console.log(this.products)
    })


  }
  
}

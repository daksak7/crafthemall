import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../content/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  constructor(private ps:ProductService, private activatedRoute:ActivatedRoute) { }

  detailedproducts: Product[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{
          this.ps.getProducts(params["product_id"])
    .subscribe(data=>{
      this.detailedproducts=data;
      //console.log(this.detailedproducts)
    })  
      }
    )


  }

}

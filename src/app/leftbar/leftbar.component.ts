import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Subproduct } from '../content/subproduct'

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css'],
  providers: [ProductService]
})
export class LeftbarComponent implements OnInit {

  constructor(private ps: ProductService, private activatedRoute: ActivatedRoute) { }

  subproducts: Subproduct[];
  products : any[]=[];

  ngOnInit() {
    let test: Array<number>;
    this.activatedRoute.params.subscribe(
      params => {
        this.ps.getSubProducts(params["product_id"])
          .subscribe(subdata => {
            this.subproducts = subdata;
           // console.log(this.subproducts[0][2])
          })
      }
    )
    //ikinci aşama



  }

}

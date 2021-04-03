import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './content/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Product)=>p.product_name
      .toLocaleLowerCase().indexOf(filterText)!==-1):value;
    
  }

}

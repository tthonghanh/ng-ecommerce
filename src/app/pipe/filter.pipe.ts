import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products;
    }
    return products.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

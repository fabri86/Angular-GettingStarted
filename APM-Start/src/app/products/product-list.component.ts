import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[] = [];
  errorMessage: string;
  _listFilter: string;
  
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];

  constructor(private productService : ProductService){
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }
  ngOnInit(): void {
      // console.log('In OnInit method...');
      this.productService.getProducts().subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error
      );
      this.filteredProducts = this.products;
  }
  performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    // console.log(message);
    this.pageTitle = 'Product List' + message;
  }
}

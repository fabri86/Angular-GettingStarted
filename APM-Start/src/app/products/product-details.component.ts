import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.product =
      {
        'productId': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2015',
        'description': 'Standard two-button video game controller',
        'price' : 35.95,
        'starRating' : 4.6,
        'imageUrl' : 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      };

      this.pageTitle += `: ${id} `;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}


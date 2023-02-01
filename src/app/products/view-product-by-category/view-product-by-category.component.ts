import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css'],
})
export class ViewProductByCategoryComponent {
  productList: Product[];
  searchCategory: Category;

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      // console.log(data['id']);
      this.searchCategory = data['id'];

      this.productService.searchProductByCategory(this.searchCategory)
        .subscribe((categoryData) => {
          this.productList = categoryData;
      });
      
    });
    
  }
}

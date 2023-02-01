import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  categoryList: Category[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategory().subscribe((data) => {
      // console.log(data);
      
      this.categoryList = data;
    });
  }
}

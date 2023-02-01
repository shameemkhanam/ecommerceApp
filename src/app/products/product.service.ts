import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(productBody): Observable<Product> {
    const baseUrl = 'http://localhost:3000/ecomProducts';
    return this.http.post<Product>(baseUrl, productBody);
  }

  viewProduct(): Observable<Product[]> {
    const baseUrl = 'http://localhost:3000/ecomProducts/';
    return this.http.get<Product[]>(baseUrl);
  }

  updateProduct(productId, productBody): Observable<Product> {
    const baseUrl = 'http://localhost:3000/ecomProducts/' + productId;
    return this.http.put<Product>(baseUrl, productBody);
  }

  deleteProduct(productId): Observable<Product> {
    const baseUrl = 'http://localhost:3000/ecomProducts/' + productId;
    return this.http.delete<Product>(baseUrl);
  }

  searchProductByCategory(categoryId): Observable<Product[]> {
    const baseUrl = 'http://localhost:3000/ecomProducts?category=' + categoryId;
    return this.http.get<Product[]>(baseUrl);
  }

  searchProductByDate(dateParam): Observable<Product[]> {
    const baseUrl = 'http://localhost:3000/ecomProducts/date=' + dateParam;
    return this.http.get<Product[]>(baseUrl);
  }

  getCategory() {
    const catUrl = 'http://localhost:3000/categories/';
    return this.http.get<Category[]>(catUrl);
  }
}

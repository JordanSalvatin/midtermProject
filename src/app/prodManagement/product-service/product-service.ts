import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../../models/product.interface';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-product-service',
  imports: [RouterOutlet,],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})

export class ProductService {
products: Product[] = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 25, stock: 50, status: 'Available', description: 'Red Fuji apple.' },
    { id: 2, name: 'Cabbage', category: 'Vegetable', price: 15, stock: 100, status: 'Available', description: 'Fresh green cabbage.' },
    { id: 3, name: 'Mango', category: 'Fruit', price: 40, stock: 0, status: 'Out of Stock', description: 'Sweet Philippine mango.' },
    { id: 4, name: 'Carrots', category: 'Vegetable', price: 180, stock: 12, status: 'Limited', description: 'Yummy Carrots' },
    { id: 5, name: 'Tomato', category: 'Vegetable', price: 30, stock: 45, status: 'Available', description: 'Juicy Tomato' },
    { id: 6, name: 'Strawberry', category: 'Fruit', price: 250, stock: 8, status: 'Limited', description: 'Baguio strawberries.' },
    { id: 7, name: 'Pineapple', category: 'Fruit', price: 85, stock: 20, status: 'Available', description: 'Sweet Pineapple.' },
    { id: 8, name: 'Watermelon', category: 'Fruit', price: 150, stock: 5, status: 'Limited', description: 'Seedless Red watermelon.' },
    { id: 9, name: 'Durian', category: 'Fruit', price: 350, stock: 0, status: 'Out of Stock', description: 'Native Durian from Davao.' },
    { id: 10, name: 'Lemon', category: 'Fruit', price: 20, stock: 60, status: 'Available', description: 'VerySour Lemon' }
  ];
selectedProduct: Product | null = null; 
showModal: boolean = false;

closeModal(): void {
  this.showModal = false;  

}

getProduct(): Product[] {
  return this.products;
}

getProductByID(id: number): Product | undefined {
  return this.products.find(e => e.id === id);
}

updateProduct(updated: Product): void {
  const idx = this.products.findIndex (e => e.id === updated.id);
  if (idx !== -1) this.products[idx] = { ...updated};
}

isAuthenticated(): boolean {
  return !!sessionStorage.getItem('auth_token');
}
login(): void {sessionStorage.setItem('auth_token', 'demo-token'); }
logout(): void {sessionStorage.removeItem('auth_token',); }
}


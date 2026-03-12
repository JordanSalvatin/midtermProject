import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../product-service/product-service';
import { ProdList } from '../prod-list/prod-list';
import { Productcomponent,} from '../../Comps/products/products';

@Component({
  selector: 'app-prod-details',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, ProductService, ProdList, Productcomponent, ProductDetails],
  templateUrl: './prod-details.html',
  styleUrl: './prod-details.css',
})

export class ProductDetails implements OnInit {
selectedProduct: Product|undefined;
saved = false;
errorMessage=''
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private productService: ProductService
){}
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.selectedProduct = this.productService.getProductByID(id);
}
goBack() {
  this.router.navigate(['/products']);
}
}


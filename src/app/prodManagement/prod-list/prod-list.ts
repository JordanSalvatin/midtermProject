import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, ActivatedRoute, Router,Route} from '@angular/router';
import { ProductService } from '../product-service/product-service';
import { Product } from '../../models/product.interface';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ProductDetails } from '../prod-details/prod-details';
import { Productcomponent } from '../../Comps/products/products';

@Component({
  selector: 'app-prod-list',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, Productcomponent, ProductDetails ],
  templateUrl: './prod-list.html',
  styleUrl: './prod-list.css',
})

export class ProdList implements OnInit{
product: Product[] = [];
returnUrl: string | null = null;
searchPlaceholder:string="Search by name, description, or origin..."
selectedId: number|null =null;
searchTerm = '';
constructor(
  private productService: ProductService,
  private route: ActivatedRoute,
  private router: ProdList
){}

ngOnInit(): void {
  this.product = this.productService.getProduct();
}

getProduct(p:Product): void {
  this.selectedId = p.id;
//  this.router.navigate([p.id], { relativeTo: this.route });
}

get filteredProduct(): Product[] {
  const term = this.searchTerm.toLowerCase();
  return this.product.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.description.toLowerCase().includes(term) ||
    p.status.toLowerCase().includes(term)
  );
}
}



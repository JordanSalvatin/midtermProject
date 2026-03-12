import { Routes } from '@angular/router';
import { Productcomponent } from './Comps/products/products';
import { Interpolation } from './Comps/interpolation/interpolation';
import { EventBinding } from './Comps/event-binding/event-binding';
import { PropertyBinding } from './Comps/property-binding/property-binding';
import { TwoWayBinding } from './Comps/two-way-binding/two-way-binding';
import { Component } from '@angular/core';
import { ProductDetails } from './prodManagement/prod-details/prod-details';
import { ProductService } from './prodManagement/product-service/product-service';

export const routes: Routes = [
{ path: 'products', component: Productcomponent },
  { path: 'interpolation', component: Interpolation },
  { path: 'event-binding', component: EventBinding },
  { path: 'property-binding', component: PropertyBinding },
  { path: 'two-way-binding', component: TwoWayBinding },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
{
    path: 'prod_list',
    component: Productcomponent,
    children: [
        {
            path: ':id',
            children: [
                {path: 'details', component: ProductDetails},
                {path: 'posts', component: ProductService},
                {path: 'profile', component: Productcomponent},
            ]
        }
    ]
}
]



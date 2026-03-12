import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Interpolation } from './Comps/interpolation/interpolation';
import { EventBinding } from './Comps/event-binding/event-binding';
import { NavBar } from './Comps/nav-bar/nav-bar';
import { TwoWayBinding } from './Comps/two-way-binding/two-way-binding';
import { PropertyBinding } from './Comps/property-binding/property-binding';
import { Productcomponent } from './Comps/products/products';
import { ProductDetails } from "./prodManagement/prod-details/prod-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Interpolation, EventBinding, TwoWayBinding, PropertyBinding, Productcomponent, ProductDetails, ProductDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermProject');
}

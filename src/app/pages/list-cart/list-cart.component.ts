import { Component, Input } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './list-cart.component.html',
  styleUrl: './list-cart.component.scss',
})
export class ListCartComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {}
}

import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    public authService: AuthService,
    public storeService: StoreService,
  ) {}
}

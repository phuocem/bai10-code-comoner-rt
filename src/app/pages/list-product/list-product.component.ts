import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { StoreService } from '../../services/store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(public storeService: StoreService) {}
}

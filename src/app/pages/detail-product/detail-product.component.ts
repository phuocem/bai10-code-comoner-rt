import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { elementAt } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  @Input() detailProduct!: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(
      (element) => element.id == parseInt(id),
    );
    console.log(this.detailProduct);
  }

  protected readonly ProductCardComponent = ProductCardComponent;
}

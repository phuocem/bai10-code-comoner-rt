import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Dog',
      price: 100,
      description: 'Dogs are loyal animals and are similar to wolves',
      inStock: 10,
      imageUrl: 'assets/img.png',
    },
    {
      id: 2,
      name: 'Cat',
      price: 200,
      description: 'Cats are cute animals and are similar to tigers',
      inStock: 20,
      imageUrl: 'assets/meo.png',
    },
    {
      id: 3,
      name: 'mouse',
      price: 300,
      description: 'Hamsters are cute animals and are similar to mice',
      inStock: 30,
      imageUrl: 'assets/chuot.png',
    },
    {
      id: 4,
      name: 'Rabbit',
      price: 400,
      description: 'Rabbits are cute animals and are similar to hares',
      inStock: 40,
      imageUrl: 'assets/tho.png',
    },
    {
      id: 5,
      name: 'Parrot',
      price: 500,
      description: 'Parrots are cute animals and are similar to parrots',
      inStock: 50,
      imageUrl: 'assets/vet.png',
    },
  ];

  cart: any[] = [];
  totalAmount = 0;

  addtocart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Bạn cần đăng nhập để thêm vào giỏ hàng');
      return;
    }

    let findIndex = this.cart.findIndex((element) => element.id == item.id);
    let findIndex1 = this.products.findIndex(
      (element) => element.id == item.id,
    );

    if (this.products[findIndex1].inStock == 0) {
      return;
    }

    if (findIndex != -1) {
      this.cart[findIndex].inStock += 1;
      this.products[findIndex1].inStock -= 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        inStock: 1,
        img: item.img,
      });
      this.products[findIndex1].inStock -= 1;
    }
    this.totalcost();
  }

  removeFromCart(item: any) {
    const cartIndex = this.cart.findIndex((element) => element.id === item.id);
    const productIndex = this.products.findIndex(
      (element) => element.id === item.id,
    );

    if (cartIndex !== -1 && productIndex !== -1) {
      if (this.cart[cartIndex].inStock > 1) {
        this.cart[cartIndex].inStock--;
        this.products[productIndex].inStock++;
      } else {
        this.cart.splice(cartIndex, 1);
        this.products[productIndex].inStock++;
      }
    }
    this.totalcost();
  }

  totalcost() {
    this.totalAmount = 0;
    for (let item of this.cart) {
      this.totalAmount += item.price * item.inStock;
    }
    return this.totalAmount;
  }

  checkout() {
    this.cart = [];
    this.totalAmount = 0;
  }
}

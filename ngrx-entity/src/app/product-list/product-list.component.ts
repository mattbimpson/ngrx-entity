import { Component, OnInit } from '@angular/core';
import { IProductState } from '../store/reducer';
import { Store } from '@ngrx/store';
import { IProduct } from '../models/product';
import { setProducts } from '../store/actions';
import { selectProducts } from '../store/selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store: Store<IProductState>) { }

  products: IProduct[];

  ngOnInit(): void {
    const products = [
      {
        id: 1234,
        name: 'test 1',
        description: 'first product'
      },
      {
        id: 5678,
        name: 'test 2',
        description: 'second product'
      }
    ];

    this.store.dispatch(setProducts({products}));

    this.store.select(selectProducts).subscribe((products: IProduct[]) => {
      this.products = products;
    })
  }
}

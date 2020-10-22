import { Component, OnInit } from '@angular/core';
import { IProductState } from '../store/reducer';
import { Store } from '@ngrx/store';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store: Store<IProductState>) { }

  productList: IProduct[];

  ngOnInit(): void {
    this.store.select((state => state.entities))
  }
}

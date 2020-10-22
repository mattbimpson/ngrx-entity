import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IProduct } from '../models/product';
import { createReducer, on } from '@ngrx/store';

import { setProducts, createProduct, updateProduct, deleteProduct } from './actions';

export interface IProductState extends EntityState<IProduct>{}

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: IProductState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  on(setProducts, (state, action) => adapter.setAll(action.products, state)),
  on(createProduct, (state, action) => adapter.addOne(action.product, state)),
  on(updateProduct, (state, action) => adapter.updateOne(action.update, state)),
  on(deleteProduct, (state, action) => adapter.removeOne(action.product.id, state))
);

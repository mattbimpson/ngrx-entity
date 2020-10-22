import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ProductActionTypes } from './action-types';
import { IProduct } from '../models/product';

export const createProduct = createAction(
  ProductActionTypes.CreateProduct,
  props<{product: IProduct}>()
)

export const setProducts = createAction(
  ProductActionTypes.SetProducts,
  props<{products: IProduct[]}>()
);

export const updateProduct = createAction(
  ProductActionTypes.UpdateProduct,
  props<{update: Update<IProduct>}>()
);

export const deleteProduct = createAction(
  ProductActionTypes.DeleteProduct,
  props<{product: IProduct}>()
);

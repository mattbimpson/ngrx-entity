import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromProduct from './reducer';

export interface State {
  product: fromProduct.IProductState;
}

export const reducers: ActionReducerMap<State> = {
  product: fromProduct.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

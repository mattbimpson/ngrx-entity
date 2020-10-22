import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IProductState, selectAll, productFeature } from './reducer';

export const selectFeature = createFeatureSelector<IProductState>(productFeature);


export const selectProducts = createSelector(
  selectFeature,
  selectAll
);

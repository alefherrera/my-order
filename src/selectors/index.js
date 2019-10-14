import { createSelector } from 'redux-starter-kit';

export const dialogSelector = createSelector(
  state => state.dialog,
  dialog => dialog
);

export const preorderSelector = createSelector(
  state => state.preorder,
  preorder => ({
    items: preorder,
    total: preorder.reduce((p, c) => p + c.price, 0),
  })
);

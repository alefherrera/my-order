import { createSelector } from 'redux-starter-kit';

export const dialogSelector = createSelector(
  state => state.dialog,
  dialog => dialog
);

export const orderSelector = createSelector(
  state => state.item,
  item => ({
    items: item,
    total: item.reduce((p, c) => p + c.price, 0),
  })
);

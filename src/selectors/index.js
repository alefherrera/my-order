import { createSelector } from 'redux-starter-kit';

export const dialogSelector = createSelector(
  state => state.dialog,
  dialog => dialog
);

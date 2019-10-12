import { createSelector } from 'redux-starter-kit';

export const notificationSelector = createSelector(
  state => state.notification,
  notification => notification
);

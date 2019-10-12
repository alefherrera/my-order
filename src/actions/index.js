import {
  ADD_ITEM,
  REMOVE_ITEM,
  CREATE_SESSION,
  CLOSE_ORDER,
} from '../constants';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload,
});

export const createSession = payload => ({
  type: CREATE_SESSION,
  payload,
});

export const closeOrder = payload => ({
  type: CLOSE_ORDER,
  payload,
});

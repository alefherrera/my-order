import { createAction } from 'redux-starter-kit';
import { CREATE_SESSION, CLOSE_ORDER } from '../constants';

export const createSession = createAction(CREATE_SESSION);

export const closeOrder = createAction(CLOSE_ORDER);

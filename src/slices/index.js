import { createSlice } from 'redux-starter-kit';

export const notification = createSlice({
  initialState: {
    open: false,
    message: '',
  },
  reducers: {
    showNotification: (state, { payload }) => ({
      ...state,
      open: true,
      message: payload.message,
    }),
    closeNotification: state => ({
      ...state,
      open: false,
    }),
  },
});

export const item = createSlice({
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, payload],
    removeItem: (state, { payload }) => state.filter(x => x.title !== payload),
  },
});

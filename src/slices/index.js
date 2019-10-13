import { createSlice } from 'redux-starter-kit';

export const item = createSlice({
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, payload],
    removeItem: (state, { payload }) => state.filter(x => x.title !== payload),
  },
});

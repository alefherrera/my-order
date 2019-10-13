import { createSlice } from 'redux-starter-kit';

const checkIngredients = option => {
  if (!option.ingredients) {
    return option;
  }
  return {
    ...option,
    ingredients: option.ingredients.map(ingredient => ({
      ...ingredient,
      checked: true,
    })),
  };
};

const changeCheck = (option, payload) => ({
  ...option,
  ingredients: option.ingredients.map(ingredient => {
    return ingredient.name === payload
      ? { ...ingredient, checked: !ingredient.checked }
      : ingredient;
  }),
});

export const item = createSlice({
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, payload],
    removeItem: (state, { payload }) => state.filter(x => x.title !== payload),
  },
});

export const dialog = createSlice({
  initialState: {
    open: false,
  },
  reducers: {
    show: (state, { payload }) => ({
      ...state,
      open: true,
      option: checkIngredients(payload),
    }),
    close: () => ({
      open: false,
    }),
    ingredientChange: (state, { payload }) => ({
      ...state,
      option: changeCheck(state.option, payload),
    }),
  },
});

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

const selectSide = (option, payload) => ({
  ...option,
  sides: option.sides.map(side => ({
    ...side,
    checked: side.name === payload,
  })),
});

const checkSides = option => {
  if (!option.sides) {
    return option;
  }
  return {
    ...option,
    sides: option.sides.map((side, i) => ({
      ...side,
      checked: i === 0,
    })),
  };
};

export const preorder = createSlice({
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
      option: checkSides(checkIngredients(payload)),
    }),
    close: () => ({
      open: false,
    }),
    ingredientChange: (state, { payload }) => ({
      ...state,
      option: changeCheck(state.option, payload),
    }),
    selectSide: (state, { payload }) => ({
      ...state,
      option: selectSide(state.option, payload),
    }),
  },
});

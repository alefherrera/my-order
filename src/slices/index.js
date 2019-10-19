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

const selectChoice = (option, payload) => ({
  ...option,
  choices: option.choices.map(side => ({
    ...side,
    checked: side.name === payload,
  })),
});

const checkChoices = option => {
  if (!option.choices) {
    return option;
  }
  return {
    ...option,
    choices: option.choices.map((side, i) => ({
      ...side,
      checked: i === 0,
    })),
  };
};

let id = 0;

export const preorder = createSlice({
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, { ...payload, id: id++ }],
    removeItem: (state, { payload }) => state.filter(x => x.id !== payload.id),
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
      option: checkChoices(checkSides(checkIngredients(payload))),
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
    selectChoice: (state, { payload }) => ({
      ...state,
      option: selectChoice(state.option, payload),
    }),
  },
});

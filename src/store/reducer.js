import * as actionsType from './actions';

const initialState = {
  ingredients: {
    salada: 0,
    bacon: 0,
    queijo: 0,
    carne: 0,
  },
  totalPrice: 8,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionsType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default:
            return state;
    };
};

export default reducer;
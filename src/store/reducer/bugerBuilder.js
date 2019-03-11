import * as actionsType from '../actions/actions';

const initialState = {
  ingredients: {
    salada: 0,
    bacon: 0,
    queijo: 0,
    carne: 0,
  },
  totalPrice: 8,
};

const INGREDIENT_PRICES = {
    salada: 1,
    queijo: 0.8,
    carne: 2.6,
    bacon: 1.4
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }, 
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionsType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }, 
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state;
    };
};

export default reducer;
import * as actionsType from '../actions/actions';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients: null,
  totalPrice: 8,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
    salada: 1,
    queijo: 0.8,
    carne: 2.6,
    bacon: 1.4
};

const addIngredient = (state, action) => {
    const updatedIngredient = {  [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }; 
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients, 
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIng = {  [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }; 
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updState = {
                ingredients: updatedIngs, 
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };

            return updateObject(state, updState);
};

const setIngredient = (state, action) => {
    return updateObject (state, {
        ingredients: {
            salada: action.ingredients.salada,
            bacon: action.ingredients.bacon,
            queijo: action.ingredients.queijo,
            carne: action.ingredients.carne
        },
        totalPrice: 8,
        error: false,
        building: false
    });
};

const fetchIngredientFail = (state,action) => {
    return updateObject(state, {
        error: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.ADD_INGREDIENT: return addIngredient(state, action);   
        case actionsType.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionsType.SET_INGREDIENTS: return setIngredient(state, action);
        case actionsType.FETCH_INGREDIENT_FAILED: return fetchIngredientFail(state, action);
        default: return state;
    };
};

export default reducer;
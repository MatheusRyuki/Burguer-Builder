import * as actions from '../actions/actions';

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }    
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        case actions.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
                
            };
        default:
            return state;
    };
};

export default reducer;
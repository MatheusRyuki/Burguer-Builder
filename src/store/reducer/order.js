import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseinit = (state, action) => {
    return updateObject(state, {
        purchased: false
    }); 
};

const purchaseStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const purchaseSuccess = (state, action) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    });
};

const purchaseFail = (state, action) => {
    return updateObject(state, {
        loading: false,  
    });
};

const purchaseOrderStart = (state, action) => {
    return updateObject(state, {
        loading: true,  
    });
};

const purchaseOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false,  
    });
};

const purchaseOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,  
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PURCHASE_INIT: return purchaseinit(state, action);
        case actions.PURCHASE_BURGER_START: return purchaseStart(state, action);
        case actions.PURCHASE_BURGER_SUCCESS: return purchaseSuccess(state, action);
        case actions.PURCHASE_BURGER_FAIL: return purchaseFail(state, action);  
        case actions.FETCH_ORDERS_START: return purchaseOrderStart(state, action);  
        case actions.FETCH_ORDERS_SUCCESS: return purchaseOrderSuccess(state, action);  
        case actions.FETCH_ORDERS_FAILED: return purchaseOrderFail(state, action);
        default: return state;
    };
};

export default reducer;
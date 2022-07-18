import { ActionsType } from "../Action/ActionType";
 const initialState={
    products:[]
 }
 export const ProductReducer = (action, state = initialState) => {
    switch (action.type) {
        case ActionsType.SET_PRODUCT:
            return { ...state, products: action.payload };
        case ActionsType. SELECTED_PRODUCTS:
            console.log("pro=>", action.payload)
            return { ...state, products: action.payload }
        default:
            return state;
    }

}
import { createAction, createReducer, on } from "@ngrx/store";
import { IProduct } from "../interfaces/Product";

export interface IProductState {
    listProduct: any
 }

export const productInitialState: IProductState = {
    listProduct: []
}

export const listProductsAction = createAction('[Product] Lista todo os produtos', (payload: any) => ({ payload }))
export const addProductAction = createAction('[Product] Adicionar produto da lista', (payload: any) => ({ payload }))
export const removeProductAction = createAction('[Product] Remove produto da lista', (payload: any) => ({ payload }))

export const productReduce = createReducer(
    productInitialState,
    on(listProductsAction, (state, payload) => {
        state = {
            ...state,
            listProduct: payload.payload
        }
        return state
    }),
    on(addProductAction, (state, payload) => {
        state = {
            ...state,
            listProduct: [payload.payload, ...state.listProduct]
        }
        return state
    }),
    on(removeProductAction, (state, payload) => {
        state = {
            ...state,
            listProduct: state.listProduct.filter((i: IProduct) => i.id !== payload.payload)
        }
        return state
    })
)
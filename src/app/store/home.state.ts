import { createAction, createReducer, on } from "@ngrx/store";

export interface IProductsProvidersState { 
    columns: string[],
    rows: any[]
}

export const productProviderInitialState: IProductsProvidersState = {
    columns: [],
    rows: []
}

export const listProductsProvidersAction = createAction('[Home] Lista os dados produto x fornecedor', (payload: any) => ({ payload }))

export const listProductsProvidersReduce = createReducer(
    productProviderInitialState,
    on(listProductsProvidersAction, (state, payload) => {
        const data = payload.payload
        state = {
            columns: Object.keys(data[0]),
            rows: data
        }
        return state
    })
)
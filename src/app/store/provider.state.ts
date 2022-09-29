import { IProvider } from "../interfaces/Providers"
import { createAction, createReducer, on } from "@ngrx/store"

export interface IProviderState {
    listProvider: any
}

export const providerInitialState: IProviderState = {
    listProvider: []
}

export const listProvidersAction = createAction('[Provider] Lista todo os fornecedores', (payload: any) => ({ payload }))
export const removeProviderAction = createAction('[Provider] Remove fornecedor da lista', (payload: any) => ({ payload }))
export const addProviderAction = createAction('[Provider] Adicionar fornecedor na lista', (payload: any) => ({ payload }))

export const providerReduce = createReducer(
    providerInitialState,
    on(listProvidersAction, (state, payload) => {
        state = {
            ...state,
            listProvider: payload.payload
        }
        return state
    }),
    on(removeProviderAction, (state, payload) => {
        state = {
            ...state,
            listProvider: state.listProvider.filter((i: IProvider) => i.id !== payload.payload)
        }
        return state
    }),
    on(addProviderAction, (state, payload) => {
        state = {
            ...state,
            listProvider: [payload.payload, ...state.listProvider]
        }
        return state
    })
)
import { createReducer } from "@ngrx/store";
import { Product } from "../interfaces/Product";

export interface IProductState extends Product { }

export const productInitialState: IProductState[] = []

export const productReduce = createReducer(
    productInitialState
)
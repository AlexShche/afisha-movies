import {combineReducers} from "redux"
import {movies} from "./movies"
import {meta} from "./meta"

export const rootReducer = combineReducers({
    movies,
    meta
})
import {ERROR_RECEIVED, MOVIES_LOADED} from "../types"

interface ActionParams {
    type: string,
    payload: any
}

const initialState = {
    movies: [],
    loading: true
}

export const movies = (state = initialState, {type, payload}: ActionParams) => {
    switch (type) {
        case MOVIES_LOADED:
            return {
                ...state,
                movies: payload,
                loading: false
            }
        case ERROR_RECEIVED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
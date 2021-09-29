import {ERROR_RECEIVED} from "../types"

interface ActionParams {
    type: string,
    payload: any
}

const initialState = {
    error: null
}

export const meta = (state = initialState, {type, payload}: ActionParams) => {
    switch (type) {
        case ERROR_RECEIVED:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}
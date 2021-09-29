import {Dispatch} from "redux"
import api from "../api"
import {ERROR_RECEIVED, MOVIES_LOADED} from "../types"

export const allMovies = () => (dispatch: Dispatch) => {
    api.movies.all()
        .then((res: { data: any }) => {
            dispatch({
                type: MOVIES_LOADED,
                payload: res.data.data
            })
        })
        .catch(() => {
            dispatch({
                type: ERROR_RECEIVED,
                payload: "Oops, something went wrong"
            })
        })
}
import {Dispatch} from "redux"
import api from "../api"

export const allMovies = () => (dispatch: Dispatch) => {
    api.movies.all()
        .then((res: { data: any }) => {
            console.log("res", res.data)
        })
}
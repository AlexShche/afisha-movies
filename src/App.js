import {useEffect} from "react"
import {Carousel} from "antd"
import {useDispatch} from "react-redux"

import {allMovies} from "./redux/actions/movies"
import {Card} from "./components/Card"

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allMovies())
    }, [])

    return (
        <div className="App">
            <div className="movies">
                <Carousel
                    arrows
                    slidesToShow={6}
                    slidesToScroll={5}
                    infinite
                >
                    <div>
                        <Card/>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    <div>
                        <h3>10</h3>
                    </div>
                    <div>
                        <h3>11</h3>
                    </div>
                    <div>
                        <h3>12</h3>
                    </div>
                    <div>
                        <h3>13</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
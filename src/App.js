import {useEffect} from "react"
import {Carousel} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {LeftOutlined, RightOutlined} from "@ant-design/icons"

import {allMovies} from "./redux/actions/movies"
import {Card} from "./components/Card"
import {Loading} from "./components/Loading"
import {Error} from "./components/Error"

export const App = () => {

    const SamplePrevArrow = ({onClick, className}) => <div className={className} onClick={onClick}><LeftOutlined/></div>
    const SampleNextArrow = ({onClick, className}) => <div className={className} onClick={onClick}><RightOutlined/></div>

    const {loading, movies} = useSelector(state => state.movies)
    const {error} = useSelector(state => state.meta)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allMovies())
    }, [])

    if (error) return <Error/>

    return loading ? <Loading/> :
        <div className="App">
            {
                !movies.length ? <p>Ничего не найдено</p> :
                    <div className="movies">
                        <Carousel
                            dots={false}
                            arrows
                            nextArrow={<SampleNextArrow/>}
                            prevArrow={<SamplePrevArrow/>}
                            slidesToShow={6}
                            slidesToScroll={5}
                            infinite
                        >
                            {
                                movies
                                    .sort((a, b) => b.shows.length - a.shows.length)
                                    .map((item, key) =>
                                        <div key={key}>
                                            <Card
                                                img={item.mainMediaObject.url}
                                                rate={item.kinopoiskRating ? Number(item.kinopoiskRating) : item.kinopoiskRating}
                                                name={item.title}
                                                genre={item.genres[0].name}
                                                existTrailer={!!item.moverTrailerCode}
                                                ageRating={item.ageRating}
                                            />
                                        </div>
                                    )
                            }
                        </Carousel>
                    </div>
            }
        </div>
}
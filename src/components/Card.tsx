import {FC, useState, useEffect} from "react"
import {CaretRightOutlined} from "@ant-design/icons"

import testImg from "../images/fixture_movie_cover_city.jpg"

interface CardProps {

}

enum Rate {
    slow = "SLOW",
    middle = "MIDDLE",
    high = "HIGH"
}

export const Card: FC<CardProps> = (props) => {
    const rate: number = 3.9
    const [currentRate, setCurrentRate] = useState<string>("")

    useEffect(() => {
        if (rate < 4.0) setCurrentRate(Rate.slow)
        else if (rate >= 4.0 && rate < 7.0) setCurrentRate(Rate.middle)
        else if (rate >= 7.0) setCurrentRate(Rate.high)
    }, [])

    return (
        <div className="card">
            <div className="card-image">
                <div className="card-rate">
                    {rate}
                </div>
                <img src={testImg} alt="movie"/>
                <CaretRightOutlined/>
            </div>
            <h3>Breaking bad {currentRate}</h3>
            <div className="card-about">
                <div className="card-type">Триллер</div>
                <div className="card-age-rating">18+</div>
            </div>
        </div>
    )
}
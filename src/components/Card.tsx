import {FC, useState, useEffect} from "react"
import {CaretRightOutlined} from "@ant-design/icons"

interface CardProps {
    name: string,
    genre: string,
    existTrailer?: boolean,
    ageRating: string,
    img: string,
    rate?: number
}

enum Rate {
    slow = "slow",
    middle = "middle",
    high = "high"
}

export const Card: FC<CardProps> = (props) => {
    const [currentRate, setCurrentRate] = useState<string>("")

    useEffect(() => {
        if (props.rate) {
            if (props.rate < 4.0) setCurrentRate(Rate.slow)
            else if (props.rate >= 4.0 && props.rate < 7.0) setCurrentRate(Rate.middle)
            else if (props.rate >= 7.0) setCurrentRate(Rate.high)
        }
    }, [])

    return (
        <div className="card">
            <div className="card-image">
                <div className={`card-rate card-${currentRate}`}>
                    {props.rate}
                </div>
                <img src={`https://new.afisha.uz${props.img}`} alt="movie"/>
                {props.existTrailer && <CaretRightOutlined/>}
            </div>
            <h3>{props.name}</h3>
            <div className="card-about">
                <div className="card-genre">{props.genre}</div>
                <div className="card-age-rating">{props.ageRating}</div>
            </div>
        </div>
    )
}
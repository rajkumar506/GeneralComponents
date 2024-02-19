import React, { useRef, MouseEvent, useState } from "react"
import unRatedStarSvg from "./star.svg"
import ratedStar from "./ratedstar.svg"
import halfRatedStar from "./halfRatedStar.svg"
export const Rating: React.FC = () => {

    const arr = new Array(5).fill(0)
    const [rating, setRating] = useState<number>(3)
    const handleStarClick = (event: MouseEvent<HTMLImageElement>, index: number) => {
        const boundingClient = event.currentTarget.getBoundingClientRect()
        const difference = (event.clientX - boundingClient.left) / boundingClient.width
        const percentage = difference * 100

        if (percentage > 50) {
            setRating(index + 1)
        }
        else {
            setRating(index + 0.5)
        }
    }
    const showStar = (index: number) => {

        if (rating - index === 0.5) {
            return <img key={index} src={halfRatedStar} onClick={(event) => handleStarClick(event, index)} />
        }
        else if (rating >= index + 1) {
            return <img key={index} src={ratedStar} onClick={(event) => handleStarClick(event, index)} />
        }
        else {
            return <img key={index} src={unRatedStarSvg} onClick={(event) => handleStarClick(event, index)} />
        }
    }
    return (
        <div>
            <div>Given Rating: {rating}</div>
            {
                arr?.map((ele, index) => showStar(index))
            }


        </div>
    )
}
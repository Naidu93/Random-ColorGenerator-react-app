import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';


const StarRating = ({ noOfStars = 5 }) => {

    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);

    const handleClick = (getCurrentId) => {
        console.log(getCurrentId);

        setRating(getCurrentId);
    }
    const handleMouseEnter = (getCurrentId) => {
        console.log(getCurrentId);
        setHover(getCurrentId);
    }
    const handleMouseLeave = (getCurrentId) => {
        console.log(getCurrentId);
        setHover(rating)
    }


    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? "active" : "inactive"}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating
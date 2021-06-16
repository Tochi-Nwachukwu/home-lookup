import React, {useState} from 'react'
import './CardCarousel.css'
import { CarouselData } from './CarouselData'
import '../Cards.css'

function CardCarousel({slide}) {
    const[current, setCurrent] = useState(0)

    return (
        <div className =  "card__carousel--container">     
            <div className="card__carousel--cantainer-image">
                <div className="card__image--imagenav">
                        <div className="card__image--imagenav-icon">
                        </div>
                        <p className="card__image--imagenav-number">{current}/5</p>
                </div>
                <i className="fas fa-chevron-left fa-3x left-arrow"></i>
                <i className="fas fa-chevron-right fa-3x right-arrow"></i>
                    <div className="">
                        <img className = "carousel__main-img" src = {slide}/>
                    </div>           
            </div>

            <div className="nav__dots">
    
            </div>
        </div>
    )
}

export default CardCarousel

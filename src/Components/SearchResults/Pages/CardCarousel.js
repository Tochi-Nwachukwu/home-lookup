import React, {useState} from 'react'
import './CardCarousel.css'
import { CarouselData } from './CarouselData'
import '../Cards.css'

function CardCarousel({slides}) {
    const[current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }
    
    if (!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    return (
        <div className =  "card__carousel--container">     
            <div className="card__carousel--cantainer-image">
                <div className="card__image--imagenav">
                        <div className="card__image--imagenav-icon">
                        </div>
                        <p className="card__image--imagenav-number">{current}/5</p>
                </div>
                <i className="fas fa-chevron-left fa-3x left-arrow" onClick = {prevSlide}></i>
                <i className="fas fa-chevron-right fa-3x right-arrow" onClick = {nextSlide}></i>
                {CarouselData.map((slide, index)=>{
                    return(
                        <div className={index === current ? 'slide active': 'slide'} key = {index}>
                            {index === current && (<img className = "carousel__main-img" src = {slide.image}/>)}
                        </div>     
                    )
                })}
            </div>

            <div className="nav__dots">
    
            </div>
        </div>
    )
}

export default CardCarousel

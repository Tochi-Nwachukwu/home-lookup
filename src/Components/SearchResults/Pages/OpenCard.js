import React from 'react'
import CardCarousel from './CardCarousel'
import './OpenCard.css'
import {CarouselData} from './CarouselData'
import OpenCardDetails from './OpenCardDetails'

function OpenCard() {
    return (
        <div className = 'open_card__container'>
          <CardCarousel slides = {CarouselData}/> 
          <OpenCardDetails/> 
        </div>
    )
}

export default OpenCard

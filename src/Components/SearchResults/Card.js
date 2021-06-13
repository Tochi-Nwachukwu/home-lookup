import React from 'react'
import './Cards.css'

function Card() {
    return (
        <div className = "card__item">
            <div className="card__wrapper">
                <div className="card__image">
                    <div className="card__image--imagenav">
                        <div className="card__image--imagenav-icon">
                        </div>
                        <p className="card__image--imagenav-number">1/5</p>
                    </div>
                </div>
                <div className="card__details">
                    <h3 className="card__details-title">3 Bedroom flat in Hackney Bridge</h3>
                    <h2 className="card__details-price">£1,420 pcm</h2>
                    <div className="card__details-rooms">
                        <span className="img-bed"></span> <span className="number">3</span> <span className="img-couch"></span> <span className="number">1 2</span>
                    </div>

                    <div className="card__details--location">
                        <div className="card__details--location-img"></div>
                        <p className="class__details--location">
                        South Kensington (0.1 mile)
                        </p>

                    </div>

                    <p className="card__details--movein-date">
                    Move-in from 20/04/21 
                    </p>
                    <div className="card__details--email"></div>
                </div>
            </div>
        </div>
    )
}

export default Card

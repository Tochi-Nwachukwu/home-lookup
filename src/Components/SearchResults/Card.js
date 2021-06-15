import React, {useState, useEffect} from 'react'
import './Cards.css'
import SearchArea from '../DropdownComponents/SearchArea'
import { useContext } from "react";
import {MyContext} from '../DropdownComponents/SearchArea'
import {Link} from 'react-router-dom';

function Card({item}) {
    const { input } = useContext(MyContext);
    return (
        <Link to="/opencard">
            <div className = "card__item">
                <div className="card__wrapper">
                    <div className="card__image" style={{backgroundImage: `url("${item.imgSrc}")`}}>
                        <div className="card__image--imagenav">
                            <div className="card__image--imagenav-icon">
                            </div>
                            <p className="card__image--imagenav-number">1/5</p>
                        </div>
                    </div>
                    <div className="card__details">
                        <h3 className="card__details-title">{item.address}</h3>
                        <h2 className="card__details-price">${item.price}</h2>
                        <div className="card__details-rooms">
                            <span className="img-bed"></span> <span className="number">{item.bedrooms}</span> <span className="img-couch"></span> <span className="number">{item.bathrooms}</span>
                        </div>

                        <div className="card__details--location">
                            <div className="card__details--location-img"></div>
                            <p className="class__details--location">
                            {item.address}
                            </p>

                        </div>

                        <p className="card__details--movein-date">
                        Move-in from 20/04/21 
                        </p>
                        <div className="card__details--email"></div>
                    </div>
                </div>
            </div>        
        </Link>
        
    )
console.log({input})
    
}

export default Card

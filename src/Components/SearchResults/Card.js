import React, {useState, useEffect} from 'react'
import './Cards.css'
import SearchArea from '../DropdownComponents/SearchArea'

function Card() {

    useEffect(()=>{
        setLoading(true);
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    

    const fetchItems = async () =>{
       const data = await  fetch("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=london&home_type=Houses", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "97e543dff9msh7ce70d656813218p1e2cacjsn9ff950d1353f",
            "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
        }
        }).catch((err) => {
            console.log(err);
          }).finally(() => {
            setLoading(false);
          });

        const items = await data.json()
        console.log(items.props);
        setItems(items.props)
    
    }

    if (loading) {
        return <p>Data is loading...</p>;
      }

    if (error || !Array.isArray(items)) {
        return <p>There was an error loading your data!</p>;
      }

    return (
        <div>
            
            {items.map(item =>(
            <div className = "card__item">
            <div className="card__wrapper">
                <div className="card__image" style={{ 
      backgroundImage: `url("${item.imgSrc}")` 
    }}>
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

        ))}
        </div>
        
        
    )

    
}

export default Card

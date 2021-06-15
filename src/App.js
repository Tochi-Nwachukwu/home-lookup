import React, {useState, useEffect} from 'react'
import './App.css';
import Nav from './Components/Nav';
import SearchResContainer from './Components/SearchResults/SearchResContainer';
import SideMenu from './Components/SideMenu';
import OpenCard from './Components/SearchResults/Pages/OpenCard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link }from 'react-router-dom';
import {searchProvider} from './Components/SearchContext';
import SearchArea from './Components/DropdownComponents/SearchArea'
import Card from './Components/SearchResults/Card';
import Button from './Components/Button';

function App() {
  const [searchTerm, setSearchTerm] = useState('london');
  const [items, setItems] = useState([]);
      
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  // Function to derive the search term from the search input
  const deriveSearchTerm = (e) => {
    if (e.code === "Enter")
      e.target.value === "" ? setSearchTerm("london") : setSearchTerm(e.target.value);
  }

  
  const fetchItems = async (term) =>{
    const data = await  fetch(`https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${term}&home_type=Houses`, {
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
     console.log(items);
     setItems(items.props);
 
 }


  useEffect(() => {
    fetchItems(searchTerm);
    return () => {}
  }, [searchTerm])

  if (loading) {
    return <p>Data is loading...</p>;
  }

if (error || !Array.isArray(items)) {
    return <p>There was an error loading your data!</p>;
  }

  return (

    <searchProvider>
    <Router>
    <div className="App">
      <SideMenu searchInput ={<SearchArea deriveTerm={deriveSearchTerm} />} searchBtn={<Button title = "FIND PROPERTIES"/>} />
      <main>
        <Nav/>
        <Switch> 
          <Route path = "/" exact >
            <SearchResContainer>
            <Link to = '/opencard'>
                {items.map(item => <Card item={item} />)}
            </Link>
            </SearchResContainer>
          </Route>
          {/* <SearchResContainer/> */}
          <Route path = "/opencard" component = {OpenCard} />
        </Switch>
      </main>  
    </div>

    </Router>

    </searchProvider>
  );
}

export default App;

//IMPORT LIBRARY

import { createContext, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import dayjs from "dayjs";


//IMPORT VIEWS

import Home from '../src/Views/Home';
import Favorites from '../src/Views/Favorites';

import "../src/App.css"
//EXPORT CONTEXT

export const FavoritesContext = createContext()

//Here start the function App

export default function App() {

  //set an automatic date with dayjs library

  const today = dayjs().format("DD/MM/YYYY");
  const [favorites, setFavorites] = useState([]); //create sate for favs'

  //value for context export
  const value = {
    favorites: favorites,
    setFavorites: setFavorites,
  }

  //return here

  return (

    <FavoritesContext.Provider value={value}>

      <BrowserRouter>

        <div className="app-content">

          <header>

            <nav>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/favorites">Favorites</Link>
            </nav>

          </header>


          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />

          </Switch>

          <footer>
            <div className="footer-content">
              <p>developed by Nicolas Maillols</p>
              <p>{today}</p>
            </div>
          </footer>

        </div>


      </BrowserRouter>

    </FavoritesContext.Provider>

  )
}

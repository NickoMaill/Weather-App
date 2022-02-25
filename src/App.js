//IMPORT LIBRARY

import { createContext, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import dayjs from "dayjs";


//IMPORT VIEWS

import Home from '../src/Views/Home';
import Favorites from '../src/Views/Favorites';

import "./App.css"
import FormSignUp from "./Views/FormSignUp";
//EXPORT CONTEXT

export const FavoritesContext = createContext()
export const LogContext = createContext()

//Here start the function App

export default function App() {

  //set an automatic date with dayjs library

  const today = dayjs().format("DD/MM/YYYY");
  const [favorites, setFavorites] = useState([]); //create sate for favs'
  const [isLogged, setIsLogged] = useState(false)
  const [isSign, setIsSign] = useState(false)

  //value for context export
  const value = {
    favorites: favorites,
    setFavorites: setFavorites,
    
    isLogged: isLogged,
    setIsLogged: setIsLogged,

    isSign: isSign,
    setIsSign: setIsSign,
  }

  //return here

  return (

    <FavoritesContext.Provider value={value}>

      <BrowserRouter>

        <div className="app-content">

          <header>

            <nav>

              <div>
                <img className="logo-img" src={require("./assets/images/AppLogo.png")} alt="logo de weather-app" />
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/favorites">Favorites</Link>
              </div>

              <div>
                <Link className="link" to="/sign-in" >Se connecter</Link>
                <Link className="link" to="/sign-up" >S'inscrire</Link>
              </div>

            </nav>

          </header>


          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/sign-in" component={Favorites} />
            <Route exact path="/sign-up" component={FormSignUp} />

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

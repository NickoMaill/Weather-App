import { createContext, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import dayjs from "dayjs";

import Home from '../src/Views/Home';
import Favorites from '../src/Views/Favorites';

export const FavoritesContext = createContext()

export default function App() {
  const today = dayjs().format("DD/MM/YYYY");
  const [favorites, setFavorites] = useState([]);

  const value = {
    favorites: favorites,
    setFavorites: setFavorites,
  }

  return (

    <FavoritesContext.Provider value={value}>

      <BrowserRouter>

        <nav>
          <Link to="/">Home | </Link>
          <Link to="/favorites">Favorites | </Link>
        </nav>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />

        </Switch>

        <footer>
          <div>
            <p>developed by Nicolas Maillols</p>
            <p>{today}</p>
          </div>
        </footer>

      </BrowserRouter>

    </FavoritesContext.Provider>

  )
}

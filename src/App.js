import { useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { weatherRequest } from "./modules/API";
import dayjs from "dayjs";

import Home from '../src/Views/Home';
import Favorites from '../src/Views/Favorites';

export const apiKey = "23835421f51d272a90553849c92a284e";

export default function App() {
  const today = dayjs().format("DD/MM/YYYY");

  console.log(weatherRequest("Paris"));


  return (

    <div>

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

    </div>

  )
}

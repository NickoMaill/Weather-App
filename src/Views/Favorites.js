import { useContext, useState } from "react";
import { FavoritesContext } from "../App";

export default function Favorites(){
    const favState = useContext(FavoritesContext);

    return(
        <h1>Favorites</h1>
    )
}
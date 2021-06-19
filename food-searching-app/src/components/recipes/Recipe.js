import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Rate from "../rate/Rating";
import AddFavourites from "../favourite/AddFavourites";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const [rating, setRating] =useState(0);
  const [fav, setFav] =useState(0);
  

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />

      <a href={url} target="_blank" rel="noopener noreferrer">
        Détail complet
      </a>

      <p>Note</p>
      <Rate rating={rating} onRating={(rate)=> setRating(rate)} />
      <p>Rajouter en favori</p>
      <AddFavourites fav={fav} onFav={(favourite)=> setFav(favourite)} />

      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;

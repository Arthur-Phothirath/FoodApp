import React, { useState } from "react";
import "../../App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/recipes/Recipe";
import Alert from "../../components/recipes/Alert";
import { Link } from "react-router-dom";

function SearchFood(props) {
    
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async (e) => {
        e.preventDefault();
        if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
            return setAlert("Aucun résultat n'a été trouvé pour votre ingrédiant");
        }
        console.log(result);
        setRecipes(result.data.hits);
        console.log(result.data);
        setQuery("");
        setAlert("");
        } else {
        setAlert("Veuillez entrer un aliment ou un plat.");
        }
    };

    const onChange = e => setQuery(e.target.value);

    return (
        <div className="food-page">
            <div className="user-display">
                <h2> Bienvenue {props.location.state.name} </h2>
                <Link className="link-user-display" to="/" >| Se déconnecter | </Link>

            </div>
            <div className="search-display">
                <h1>Besoin d'idée pour cuisiner?</h1>
                <form onSubmit={getData} className="search-form">
                    {alert !== "" && <Alert alert={alert} />}
                    <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Entrez un ingrédiant ou un plat"
                    />
                    <input type="submit" value="Search" />
                </form>
                <div className="recipes">
                    {recipes !== [] &&
                    recipes.map( (recipe, index) => <Recipe key={index} recipe={recipe} />)}
                </div>
            </div>
        </div>
    )
}

export default SearchFood;
import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import LoginForm from "./components/LoginForm";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
// import "./components/usersLogin";


function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.APPID}&app_key=${process.env.APPKEY}`;

  // Input Data -----

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("Aucun résultat n'a été trouvé pour votre ingrédiant");
      }
      console.log(result);
      setRecipes(result.data.hits);
      // console.log(result.data);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Veuillez entrer un aliment ou un plat.");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  // Affichage ----- 

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">

          {/* Login Section ----- */}

          <div className="login-page">
            <div className="bonjour-page">

              <h2>
                Bonjour, <span>{user.name} </span>
              </h2>

            </div>
            <button onClick={Logout}>Logout</button>
          </div>

          {/* FOOD APP ----- */}

          <div className="food-page">
            <h1>Besoin d'idée pour cuisiner?</h1>
            <form onSubmit={onSubmit} className="search-form">
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
                recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
          </div>

        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )
      }
    </div>
  );
}

export default App;

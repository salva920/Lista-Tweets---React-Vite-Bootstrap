import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import CardForm from "./components/Formulario/CardForm";
import ListaTweets from "./components/Lista/ListaTweets";

function App() {
  const [listaTweets, setListaTweets] = useState([]);

  const CrearTweet = (tweet) => {
    setListaTweets([...listaTweets, tweet]);
  };

  const MarcarFavorito = (tweet) => {
    setListaTweets(
      setListaTweets.map((t) =>
        t.id == tweet.id ? { ...t, favorito: !t.favorito } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tweets");
    if (!data) {
      setListaTweets([]);
      return
    }
    setListaTweets(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(listaTweets));
  }, [listaTweets]);

  return (
    <div className="bg-secondary-subtle">
      <div className="container ">
        <header className="my-3 text-center text-primary">
          <h1>Lista de Tweets</h1>
        </header>

        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <CardForm CrearTweet={CrearTweet}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <ListaTweets listaTweets={listaTweets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

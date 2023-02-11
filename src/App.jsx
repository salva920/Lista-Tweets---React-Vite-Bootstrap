import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import CardForm from "./components/Formulario/CardForm";
import ListaTweets from "./components/Lista/ListaTweets";

function App() {
  const [listaTweets, setListaTweets] = useState([]);
  const [mensaje, setMensaje] = useState({
    estatus: false,
    msg: "",
    clase: "",
  });

  const CrearTweet = (tweet) => {
    setListaTweets([...listaTweets, tweet]);
    setMensaje({
      estatus: true,
      msg: "Un nuevo Tweet ha sido creado",
      clase: "alert alert-primary",
    });
    setTimeout(() => {
      setMensaje({
        estatus: false,
        msg: "",
        clase: "",
      });
    }, 5000);
  };

  const MarcarFavorito = (tweet) => {
    setListaTweets(
      listaTweets.map((t) =>
        t.id == tweet.id ? { ...t, favorito: !t.favorito } : t
      )
    );
  };

  const EliminarTweet = (id) => {
    const confirmar = confirm("Seguro que desea eliminar");
    if (confirmar){
      setListaTweets(listaTweets.filter((t) => t.id != id));

      setMensaje({
        estatus: true,
        msg: "Se ha eliminado un tweet",
        clase: "alert alert-danger",
      });
      setTimeout(() => {
        setMensaje({
          estatus: false,
          msg: "",
          clase: "",
        });
      }, 5000);
    }
    
  };

  useEffect(() => {
    let data = localStorage.getItem("tweets");
    if (!data) {
      setListaTweets([]);
      return;
    }
    setListaTweets(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(listaTweets));
  }, [listaTweets]);

  return (
    <div className="bg-secondary-subtle">
      {mensaje.estatus ? (
        <div className={mensaje.clase} role="alert">
         {mensaje.msg}
        </div>
      ) : (
        ""
      )}
      <div className="container ">
        <header className="my-3 text-center text-primary">
          <h1>Lista de Tweets</h1>
        </header>

        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <CardForm CrearTweet={CrearTweet} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            {listaTweets.length < 1 ? (
              <div className="alert alert-primary mx-3" role="alert">
                <strong>No</strong> se han registrado Tweets.
              </div>
            ) : (
              <ListaTweets
                listaTweets={listaTweets}
                MarcarFavorito={MarcarFavorito}
                EliminarTweet={EliminarTweet}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

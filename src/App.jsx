import { useState, useEffect } from "react";
import "./App.css";
import CardForm from "./components/Formulario/CardForm";
import ListaTweets from "./components/Lista/ListaTweets";

function App() {
  //Lista donde se almacenan los tweets
  const [listaTweets, setListaTweets] = useState([]);
  // Estatus que verifica si hay mensajes
  const [mensaje, setMensaje] = useState({
    estatus: false,
    msg: "",
    clase: "",
  });

  // funcion que recibe los datos del componente CrearForm y lo agrega a la lista de tweets
  const CrearTweet = (tweet) => {
    setListaTweets([...listaTweets, tweet]);
    // establece que hay un mensaje
    setMensaje({
      estatus: true,
      msg: "Un nuevo Tweet ha sido creado",
      clase: "alert alert-primary",
    });
    // elimina el mensaje despues de 5 segundos
    setTimeout(() => {
      setMensaje({
        estatus: false,
        msg: "",
        clase: "",
      });
    }, 5000);
  };

  // funcion que recibe un tweet desde el componente Tweet.jsx y lo marca o desmarca como favorito
  const MarcarFavorito = (tweet) => {
    setListaTweets(
      listaTweets.map((t) =>
        t.id == tweet.id ? { ...t, favorito: !t.favorito } : t
      )
    );
  };

  // funcion que elimina un tweet de la lista, recibe el id del tweet desde el componente Tweet.jsx
  const EliminarTweet = (id) => {
    const confirmar = confirm("Seguro que desea eliminar");
    // confirmacion de eliminar tweet
    if (confirmar) {
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

  // revisa si hay datos en el local storage y lo añade a listaTweets
  useEffect(() => {
    let data = localStorage.getItem("tweets");
    if (data) {
      setListaTweets(JSON.parse(data));
    }
  }, []);

  // vigila si hay cambios en la variable listaTweets para actualizar el local storage
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
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-5">
            <CardForm CrearTweet={CrearTweet} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 mb-5">
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

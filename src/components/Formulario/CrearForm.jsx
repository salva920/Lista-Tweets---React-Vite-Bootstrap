import { useState } from "react";

function CrearForm({CrearTweet}) {
  
  const [usuario, setUsuario] = useState("");
  const [tweet, setTweet] = useState("");
  const [errMsg, setErrMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.trim() == "" || tweet.trim() == "") {
      setErrMsg(true);
      return;
    }

    setErrMsg(false);

    const data = {
      id: new Date().getTime(),
      usuario,
      tweet,
      favorito: false,
    };

		CrearTweet(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body ">
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="text"
              className={
                errMsg && usuario.trim() == ""
                  ? "form-control mb-3 is-invalid"
                  : "form-control mb-3"
              }
              id="usuario"
              placeholder="Usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label htmlFor="usuario">Usuario</label>
          </div>
          <div className="form-floating">
            <textarea
              className={
                errMsg && tweet.trim() == ""
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="tweet"
              placeholder="Tweet"
              onChange={(e) => setTweet(e.target.value)}
            ></textarea>
            <label htmlFor="tweet">Tweet</label>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary w-100 mx-2">
              Agregar
            </button>
          </div>
          <div className="col">
            <button type="reset" className="btn btn-secondary w-100 mx-2">
              Limpiar
            </button>
          </div>
        </div>
        {errMsg ? (
          <div className="alert alert-danger mt-3" role="alert">
            Complete todos los campos.
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default CrearForm;

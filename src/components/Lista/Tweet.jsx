function Tweet({ tweet, MarcarFavorito }) {
  return (
    <div>
      <div className="card mx-3 mb-5 border-primary">
        <div className="card-header text-primary">
          <h3 className="card-title">{tweet.usuario}</h3>
        </div>
        <div className="card-body ">
          <p className="card-text">{tweet.tweet}</p>
        </div>
        <div className="card-footer text-end">
          <button
            type="button"
            className={
              tweet.favorito ? "btn btn-primary" : "btn btn-outline-primary"
            }
            onClick={()=>MarcarFavorito(tweet)}
          >
            Favorito
          </button>
          <button type="button" className="ms-3 btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

function Tweet() {
  return (
    <div>
      <div className="card mx-3 mb-5 border-primary">
        <div className="card-header text-center bg-primary text-white">
          <h3 className="card-title">Usuario1</h3>
        </div>
        <div className="card-body ">
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            ratione dignissimos ad rerum, iusto sequi aspernatur totam omnis
            fugiat, ipsam iure ea assumenda aliquam delectus! Quisquam molestias
            quam sed veniam?
          </p>
        </div>
        <div className="card-footer text-end">
          <button type="button" className="btn btn-outline-primary">
            Favorito
          </button>
          <button type="button" className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <div className="card mx-3 mb-5 border-primary">
        <div className="card-header text-center bg-primary text-white">
          <h3 className="card-title">Usuario2</h3>
        </div>
        <div className="card-body ">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corporis repudiandae perspiciatis laudantium ad quas, nihil
            reiciendis earum tempore optio dolores nesciunt vitae, dicta,
            incidunt animi mollitia adipisci quasi vero?
          </p>
        </div>
        <div className="card-footer text-end">
          <button type="button" className="btn btn-primary">
            Favorito
          </button>
          <button type="button" className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <div className="card mx-3 mb-5 border-primary">
        <div className="card-header text-center bg-primary text-white">
          <h3 className="card-title">Usuario3</h3>
        </div>
        <div className="card-body ">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            beatae excepturi vero laboriosam delectus saepe vel inventore, rerum
            voluptates aspernatur, nobis vitae unde accusantium perferendis
            expedita! Tempore ut sint nam.
          </p>
        </div>
        <div className="card-footer text-end">
          <button type="button" className="btn btn-outline-primary">
            Favorito
          </button>
          <button type="button" className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

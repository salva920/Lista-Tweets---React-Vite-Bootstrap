function CrearForm() {
  return (
    <form>
      <div className="card-body ">
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control mb-3"
              id="usuario"
              placeholder="Usuario"
            />
            <label htmlFor="usuario">Usuario</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="tweet"
              placeholder="Tweet"
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
      </div>
    </form>
  );
}

export default CrearForm;

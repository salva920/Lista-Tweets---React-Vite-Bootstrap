import CrearForm from "./CrearForm";

function CardForm({CrearTweet}) {
  return (
    <div className="card card mx-3 border-primary">
      <div className="card-header text-center bg-primary text-white">
        <h2 className="card-title">Agregar Tweet</h2>
      </div>
      <CrearForm CrearTweet={CrearTweet}/>
    </div>
  );
}

export default CardForm;

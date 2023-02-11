// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css";
import CardForm from "./components/Formulario/CardForm";
import Tweet from "./components/Lista/Tweet";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="my-3 text-center text-primary">
          <h1>Lista de Tweets</h1>
        </header>

        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <CardForm />
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <Tweet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

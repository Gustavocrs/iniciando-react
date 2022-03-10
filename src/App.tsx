import { useState } from "react";
import "./App.css";
import { Tweet } from "./components/Tweet";
import { Btn } from "./components/Btn";
import { Input } from "./components/Input";

function App() {
  const [tweets, setTweets] = useState([]);
  const [dado, setDado] = useState();
  const tela = tweets.map((tweet) => {
    return <Tweet text={tweet} />;
  });

  function criarTweet() {
    setTweets([...tweets, dado]);
  }

  return (
    <div className="container">
    
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Digite aqui"
          onChange={(e) => setDado(e.target.value)}
        />

        <Btn text="Adicionar" onClick={criarTweet} />
      
      {tela}

    </div>
  );
}

export default App;

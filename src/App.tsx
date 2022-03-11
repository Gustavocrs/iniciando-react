import { useState } from "react";
import "./App.css";
import { Tweet } from "./components/Tweet";
import { Btn } from "./components/Btn";
import { Input } from "./components/Input";

function App() {
  const [tweets, setTweets] = useState([]);
  const [dado, setDado] = useState();
  const [erro, setErro] = useState("semErro");
  const tela = tweets.map((tweet) => {
    return <Tweet text={tweet} />;
  });

  function criarTweet() {
    if (dado == undefined) {
      setErro("erro");
    } else {
      if (dado == "") {
        setDado(undefined);
      } else {
        setTweets([...tweets, dado]);
        setErro("semErro");
      }
    }
  }

  return (
    <div className="container">
      <div>
        <Input
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Digite aqui"
          onChange={(e) => setDado(e.target.value)}
        />

        <Btn text="Adicionar" onClick={criarTweet} />

      </div>
      <span className={erro}>Digite algo</span>
      {tela}
    </div>
  );
}

export default App;

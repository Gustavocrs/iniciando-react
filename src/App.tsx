import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  const [tweets, setTweets] = useState([]);

  function criarTweet() {
    setTweets([...tweets, "Novo Teste"]);
  }

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet}></Tweet>;
      })}
      <input type="text" onChange={(e) => setTweets(e.target.value)} />
      <button onClick={criarTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App;

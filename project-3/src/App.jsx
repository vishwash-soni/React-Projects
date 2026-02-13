import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false)
  const toggleGamePlay = () =>{
    setIsGameStarted(!isGameStarted);
  }
  return (
    <>
      {isGameStarted == true ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>}
    </>
  );
}

export default App;

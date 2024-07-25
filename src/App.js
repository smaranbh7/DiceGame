import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {

  const [isGamestarted, setISGameStarted] =useState(false);
  const toggleGamePlay =() =>{  // False becomes true 
    setISGameStarted((prev) =>!prev);
  }

  return (
    <>
    {/* "If the game has started, render the GamePlay component; otherwise, render the StartGame component." */}
    {isGamestarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/> }  
  
    </>
  );
}

export default App;

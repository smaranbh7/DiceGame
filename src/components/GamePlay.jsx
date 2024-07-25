import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore]= useState(0);
    const [selectedNumber, setSelectedNumber]= useState();
    const [currentDice, setCurrentDice]= useState(1);
    const [error,setError]= useState("");
    const [ShowRules, setShowRules]=useState(false);

    const generateRandomNum=(min, max) =>{ 
        return Math.floor(Math.random() *(max-min) +min);
     };
     const restScore = () =>{
        setScore(0); 
     }
 
     const rollDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNum= generateRandomNum(1,7); 
 
        setCurrentDice((prev) => randomNum);

        

        if(selectedNumber === randomNum){
            setScore(prev => prev+ randomNum);
        }else{
            setScore(prev => prev -2 );
        }

        setSelectedNumber(undefined);
     };  



    return ( 
     <div>
        <div className="topSection">
            <TotalScore  score={score}/>
            <NumberSelector 
            error={error} 
            setError={setError}
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice 
        currentDice={currentDice}
        rollDice={rollDice} 
         />
        <div className="btns">
            <button onClick={restScore}>Reset</button>
            <button  
                onClick={() => setShowRules((prev) =>!prev)}
            > {ShowRules ? "Hide" : "Show"} Rules</button>
        </div>
        {ShowRules &&<Rules />}
    </div>
 
     );
}
 
export default GamePlay ;


const RollDice = ({rollDice, currentDice}) => {



    return ( 
        <div className="diceContainer"> 
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </div>
     );
} 
 
export default RollDice;
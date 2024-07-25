const StartGame = ({toggle}) => {
    return ( 
        <container> 
            <div><img src="/images/dices.png"/>
            </div>
            
            <div>
                <h1 className="content">Dice Game</h1>
                <button
                onClick={toggle}>Play Now</button>
            </div>
        </container>
     );
};
 
export default StartGame;


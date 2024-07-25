

const   NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {

    const arrNumber = [1,2,3,4,5,6];

    const numSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError("");
    }
    
    return ( 
    <div className="selectorContainer">
        <p className="error">{error}</p>
        <div className="flex">
            {arrNumber.map((value,i) =>
                <div className="box" 
                isSelected = {value === selectedNumber}
                key={i} 
                onClick={()=> numSelectorHandler(value)  }>
                    {value}
                </div>
            )}
        </div>
        <p className="selectNumber">Select Number</p>
    </div>
     );
}
 
export default NumberSelector;
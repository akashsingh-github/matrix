import React,{useState} from "react";

function ButtonMatrix(props){
    const [isBlue, setIsBlue] = useState(true);

    return(
        <>
            <div className="button-container">
                <button className={isBlue ? 'blue-btn' : 'red-btn'} onClick={() => setIsBlue(!isBlue)}>
                    {props.id}
                </button>
            </div>
        </>
    )
}
export default ButtonMatrix;
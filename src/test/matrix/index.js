import React, {useState} from "react";
import ButtonMatrix from "./button";
function Matrix(){
    return(
        <>
            <div className="matrix-grid">
                <ButtonMatrix id="1"/>
                <ButtonMatrix id="2"/>
                <ButtonMatrix id="3"/>
                <ButtonMatrix id="4"/>
                <ButtonMatrix id="5"/>
                <ButtonMatrix id="6"/>
                <ButtonMatrix id="7"/>
                <ButtonMatrix id="8"/>
                <ButtonMatrix id="9"/>
                <ButtonMatrix id="10"/>
                <ButtonMatrix id="11"/>
                <ButtonMatrix id="12"/>
                <ButtonMatrix id="13"/>
                <ButtonMatrix id="14"/>
                <ButtonMatrix id="15"/>
                <ButtonMatrix id="16"/>
            </div>
        </>
    )
}
export default Matrix;

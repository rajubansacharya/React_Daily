import React,{useState} from "react";



function ColorPicker(){

   

    const [color , setColor] = useState("#FFFFFF");

    function colorPicker(event){
        setColor(event.target.value);
    }

    return(
        <>
        <div>
            <h1 className="color-picker-main-div"> Choose the color !!!</h1>
            <h2> raju bans acharya</h2>
            <div className="color-display" style={{backgroundColor : color}}>
            <p> {color} </p>
            </div>
            
        </div>
        <p>Choose the color you want : </p>
        <input type="color" onChange={colorPicker}></input>
        </>
    );

}

export default ColorPicker
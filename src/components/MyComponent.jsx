import React, {useState} from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Apple" , "Banana" , "Cherry"]);

    function handleAddFood(){
        const givenFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f,givenFood]);
    }
    function handleRemoveFood(index){
            setFoods(foods.filter((_, i) => i !==index));
    }
    
    return(
        <div>
            <h1>List of the food are Give below: </h1>
            <ul>
                {foods.map ((food , index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}> Add food </button>


            
        </div>
        
    );


}

export default MyComponent
import React, {useState, useEffect} from "react";

function DigitalClock (){

    const [currentTime ,  setCurrentTime] = useState(() => new Date().toLocaleTimeString());
        
   

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
          }, 1000);

          return () => clearInterval(interval);
    }, []);

    
    useEffect(() => {
        document.querySelector("h1").textContent = currentTime;
      }, [currentTime]);
   
       


    return(
    <>

        <h1> {currentTime} </h1>
 
    </>
    );

}
export default DigitalClock
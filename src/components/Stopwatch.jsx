import React,{useState, useEffect , useRef} from "react";

function StopWatch(){

    const[isRunning , setIsRunning] = useState(false);
    const [elapsedTime ,  setElapsedTime] = useState(0);
    const intervalIdRef  = useRef(null);
    const startTimeRef = useRef(0)

    useEffect(() => {

        if(isRunning)
        {
           intervalIdRef.current =  setInterval(()=> {
                setElapsedTime(Date.now() - startTimeRef.current);
            } , 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){

        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime

    }
    function stop(){

        setIsRunning(false);
        
    }
    function reset(){

        setElapsedTime(0);
        setIsRunning(false);
        
    }

    function formatTime(){


        let hours  = Math.floor(elapsedTime / (1000 * 60 * 60 ));
        let minutes = Math.floor(elapsedTime/(1000*60) % 60 );
        let seconds = Math.floor(elapsedTime/(1000) % 60 );
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${minutes}: ${seconds} : ${milliseconds}`;
    }

    return(
        <div>
            <div className="display">{formatTime()} </div>
            <div className="controls">
                <button onClick={start} className="start-button"> Start </button>
                <button onClick={stop} className="start-button"> Stop </button>
                <button onClick={reset} className="start-button"> Reset </button>
            </div>
        </div>
    );


}
export default StopWatch
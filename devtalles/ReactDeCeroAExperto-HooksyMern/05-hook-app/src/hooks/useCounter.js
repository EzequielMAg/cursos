import { useState } from "react";


export const useCounter = ( initialValue = 11 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCounter(counter + value);
    } 

    const decrement = ( value = 1 ) => {
        if(counter === 0) return;
        
        if(counter - value < 0) {
            setCounter(0);
        } else {
            setCounter(counter - value);
        }
    }

    const reset = ( ) => {
        setCounter(initialValue);
    } 

    return {
        //counter: counter,
        counter,
        setCounter,
        increment,
        decrement,
        reset
    }
}

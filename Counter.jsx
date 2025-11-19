import { useState } from "react"
const Counter=()=>{
    const[count , updateedState]=useState(0)
    const[reverseCounter , updatedReverse]=useState(15)

    const mainly=()=>{
        updateedState(count+1)
    }

    const reverse=()=>{
        updatedReverse(reverseCounter-1)
    }


    return(
        <>
        <h1>Counter:{count}</h1>
        <h2>Counter:{reverseCounter}</h2>
        <button onClick={mainly}>Update counter</button>
        <button onClick={reverse}>Click for reverse!</button>
        </>
    )
}
export default Counter 
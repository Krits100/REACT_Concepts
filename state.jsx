import { useState } from "react"
import Counter from "./Counter";

function Abcstate(){
 

//const[main jinish ta (state), update kore jeta ashbe sheta(update state)]
const[cartoons , SetCartoons]=useState("Doremon");

const handleCartoons=()=>{
    SetCartoons("Ninja-Hatori")
   
}

    return(
        <>
            <h1>State concept in React</h1>
            <h2>{cartoons}</h2>
            <button onClick={handleCartoons}>Change the value of cartoons now!</button>
            <Counter/>
        </>
    )
}
export default Abcstate
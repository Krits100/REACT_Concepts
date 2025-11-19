import { useEffect } from "react";

function Counterprops({prop}){

    useEffect(()=>{
        handleCounter();

    },[])
    const handleCounter=()=>{
        console.log("handle counter function called..")
    }

    

    return(
        <>
        <h1>Counter Component value : {prop}</h1>
        </>
    )
}
export default Counterprops;
import { useState , useEffect} from "react";
function Example(){

    const[count,setCount]=useState(0);

    useEffect( ()=> {
        callOnce(); //useEffcet er moddhe rakhle.. ekbar e cholbe.. joto icche state barao..np!!! this is how we control sideeffects.
    },[])

    function callOnce(){
        console.log("callOnce function called.");
    }

    //callOnce(); //jotobar state update hocche..totobar function call hy jacche...// this is sideeffect- which will be solved by useEffect() hook.

    return(
        <>
            <h1>useEffect Hook </h1>
            <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
        </>
    )

}   
export default Example ;

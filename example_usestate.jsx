import {useState} from "react";

function Applebeer(){

    const [realset , updatedSet]  = useState("KRITICA")

    const upi = ()=>{
    updatedSet("Kritica you are phenomenal!! ")
    }

     return(
        <>
            <h1>Practice ! </h1>
            <h2>{realset}</h2>
            <button onClick={upi}>Update silly!!</button>
        </>
    )
}


export default Applebeer;
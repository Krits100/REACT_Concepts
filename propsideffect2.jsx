import { useState } from "react";
import Counterprops from "./props_sideeffect";
function Sideeffect(){
    const[x,setX]=useState(0)
    return(
        <>  
        <Counterprops prop={x}/>
        <button onClick={()=>setX(x + 1)}>count</button>

        </>
    )
}
export default Sideeffect;
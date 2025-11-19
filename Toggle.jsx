import { useState } from "react";
import UserCompo from "./User";

function Toggle(){

    const [variable , SetVariable] = useState(true)
    const [count , setcount] = useState(0)

    function Kuchbhi(){
        SetVariable(false)
    }

    return(
        <>
            <h1>This is React for the toogle example.</h1>
            <button onClick={Kuchbhi}>Click korle state change hbe :)</button>
            { /*
            variable?<h2>Anil Sidhu</h2> : null*/
            variable? <UserCompo/> : null
            }   

            <h2>Multiple conditions in React: Count is :{count}</h2>
            <button onClick={()=>setcount(count+1)}>Counter</button>
            {
                count==0?<h3>Condition 1</h3>
                :count==1?<h3>Condition 2</h3>
                :count==2?<h3>Condition 3</h3>
                :count==3?<h3>Condition 4</h3>
                :count==4?<h3>Condition 5</h3>
                :count==5?<h3>Condition 6</h3>
                :null
            }
        </>
    )
}
export default Toggle
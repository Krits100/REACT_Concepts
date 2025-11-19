import { useState } from "react";

function Krits(){
    
    const[count , setupdatecount] = useState(100)

    const fun=()=>{
        setupdatecount(count+1)
    }

    return(
        <>
            <h3>practice of that count:: COUNT :{count}</h3>
            <button onClick={fun}>change bhai the counter value</button>
        </>
    )
}
export default Krits
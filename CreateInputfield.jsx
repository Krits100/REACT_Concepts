import { useState } from "react";
function CreateInputfield(){
    const[abc,Setabc]=useState("Anil")
    const[val,setVal]=useState("1")
    const[gigi, setGigi]= useState("Hadid@gmail.com")

    return(
        <div>
            <h1>Get Input Field Value</h1>
            <input type="text" value={abc} onChange={(event)=>Setabc(event.target.value)} placeholder="Enter Username"/>
            <h2>{abc}</h2>
            <button onClick={()=>Setabc("")}>clear</button>

            <h1>Input Filed 1</h1>
            <input type="text"  value={val} onChange={(event)=>setVal(event.target.value)} placeholder="ph no"/>
            <button onClick={()=>setVal("")}>reset</button>

            <h2>Input Field 2</h2>
            <input type="text"  value={gigi} onChange={(event)=>setGigi(event.target.value)} placeholder="Enter email"/>
            <button onClick={()=>setGigi("")}>resset</button>
        </div>
    )
}
export default CreateInputfield;
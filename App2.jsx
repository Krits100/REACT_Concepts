import CreateInputfield from "./CreateInputfield";
import Controllcomponent from "./controll_component";
import Skills from "./Checboxes";
import Radio from "./src/Radiobutton";
import Loop from "./src/Loop_in_jsx";
import Reuse from "./src/Reuse_component";
import Clock from "./Clock";
import { useState } from "react";
import Loopii from "./NestedLoop";
import Example from "./src/assets/useEffect";
import Sideeffect from "./propsideffect2";
import Inline from "./InlineStyle";
function App2(){
//taking state for change the clock's color onclicking n the dropdown menu
    const [color,setColor]=useState("green")
    return(
       /*
        <>
           <CreateInputfield/>
           <Controllcomponent/>
           <Skills/>
        </>*/



        <>
       
        <Radio/>
        <Loop/>
        <Reuse/>

        <h1>Digital Clock in React</h1>
        <select onChange={(event)=>setColor(event.target.value)}>
            <option value={"red"}>Red</option>
             <option value={"black"}>black</option>
              <option value={"blue"}>blue</option>
               <option value={"pink"}>pink</option>
        </select>
        <Clock clr={color}/>

        <Loopii/>

        <Example/>
        <Sideeffect/>

        <Inline/>
        </>
    )
}
export default App2;
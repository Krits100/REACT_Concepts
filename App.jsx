import Header from "./Header"
import Login,{Profile , Settings, userkey} from "./assets/UserComponent"
//import { Profile } from "./assets/UserComponent"
import FunctionApp from "../Events and functions";
import Abcstate from "../state";
import Applebeer from "../example_usestate";

import Tryon from "../home";
import Others from "../ManyOthers";

import Krits from "../counter_prac";
import Toggle from "../Toggle";

import Appa from "../Propsacle";
import Def_User from "../default_props";

import AddStyle from "../Wrapper";
import App2 from "../App2";

function App(){
  const name = "Anupama";
  return(
      <div>
        <Header/>
        <h1>Hello React and Hi {name}</h1>  
        <h2>Code Step by Step</h2>
        <button onClick={()=>alert("This is called in onClick function")}>Click me!!</button>
        <Fruits/>
        <Colours/>

        <Login/>
        <Settings/>
        <h1>{userkey}</h1>

        <Tryon/>
        <Others/>

        <FunctionApp/>
        <Abcstate/>


        <Applebeer/>

        <Krits/>

        <Toggle/>
        <Appa/>

        <Def_User name="Araddhya"/>
        <Def_User/>

        <AddStyle/>
        <AddStyle color="Orange">
          <h2>Adding styles like this</h2>
        </AddStyle>

         <AddStyle>
          <h2>Hello petercat</h2>
          <h4 style={{color:"red"}}>plz login</h4>
        </AddStyle>

         <AddStyle color="blue">
          <h2>Hello kushi</h2>
          <h4 style={{color:"purple"}}>plz login</h4>
        </AddStyle>

        <App2/>
      </div>
  )
}

function Fruits(){
  return(
    <div>
      <h3>Apple</h3>
      <h3>Orange</h3>
    </div>
  )
}

function Colours(){
  return(
    <div>
      <h3>White</h3>
      <h3>Yellow</h3>
    </div>
  )
}



export default App;

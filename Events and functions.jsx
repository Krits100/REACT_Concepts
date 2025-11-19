function FunctionApp(){
  function callFunc(){
    alert("Function called from react. Ekhane Function er defination ta puro call korte hy..not only the function name!")
  }

//ARROW FUNC
  const fruit=()=>{
    alert("Apple")
  }

//ARROW FUNC WITH PARAM PASS 
const mynames=(name)=>
{
    alert(name)
}

  return(
    <>
      <h1>Event and Function call</h1>
      <button onClick={callFunc}>ClickMe!!</button>
      <button onClick={fruit}>Arrow click</button>


      <button onClick={()=>mynames("Dayron")}>Name1</button>
      <button onClick={()=>mynames("Daisy")}>Name2</button>
    </>
  )
}

export default FunctionApp;
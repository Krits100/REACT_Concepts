import Props from "./props";

function Appa(){
    //let name= "Dyson Parker"
   /* let Username="Anil"
    let stream = "CSE"
    let email = "anil@gmail.com"*/

    /*let obj={
        name:"Anil Sidhu",
        age: 29,
        email:"anil@gmail.com",
        ph_no : "123498765"
    } */

        let arr=["IEM" ,"DU","IIT","NIT","MIT"]


    return(
    /*    <>
             <h1>Props in react Js</h1>
            
             <Props name={Username}  subject={stream} otherdata={email}/>
        </> 
        */
      /* <>
            <Props Userdetails={obj}/>
       </> */

       <>
             <Props aldetails={arr}/>
       </>
    )
}
export default Appa
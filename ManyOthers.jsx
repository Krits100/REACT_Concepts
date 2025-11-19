

function Others(){
    //const name="Pummy"; name na thakle or undefined hole, tahole user not found output
    const name="Pummy";
    const x=10;
    const y=20;

    const UserObj={
        name:"PummyAunty",
        email:"pummy@gmail.com",
        age: 55
    }

    const userArray=["Sam" , "Peter" , "Pam" , "Bruce"];
    let path="puppy.jpg"


    function Babies(){
        return(
            <>
            <h4>cute baby.</h4>
            </>
        )
    }

    function oparetion(a,b,op){
      if(op == "+")
      {
        return a+b;
      }
      else if(op == "-")
      {
        return a-b;
      }
      else{
        return a*b;
      }
    }


    return(
        <>
            <h1>Hi {name ? name: "User not found!"}</h1>
            <h2>{x+y}</h2>
            {Babies()}
            {oparetion(100,80,"+")}
            <h1>{UserObj.email}</h1>
            <h2>{userArray[0]}</h2>

            <input type="text" value={name}></input><br></br>
            <img src={path}></img>
            
        </>
    )
}

export default Others;
import { useState } from "react";
function Radio(){
    const[gender,setGender]=useState("female");
    const[city,setCity]=useState("Noida");
    return(
        <>
            <h2>Radio-button and Dropdowns</h2>
            <h3>Select Gender:</h3>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="Gender" id="male" value=" Male " checked={gender=="male"}/> 
            <label htmlFor="male">Male</label>
            <br></br>
            <br></br>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="Gender" id="female" value="Female" checked={gender=="female"}></input>
            <label htmlFor="female">Female</label> 
            <br></br>
            <br></br>
            <h3>Selected gender is: {gender}</h3>
            <br/><br/><br/>

            <h4>Select City:</h4>
            <select defaultValue={"Kolkata"} onChange={(event)=>setCity(event.target.value)}>
                <option value="noida">Noida</option>
                <option value="pune" >Pune</option>
                <option value="kolkata" >Kolkata</option>
                <option value="indore">Indore</option>
                <br/><br/>
            </select>

            <h3>Selected City is:{city}</h3>
        </>
    )
}
export default Radio;
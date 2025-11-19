function Skills(){
    const[skills,setSkills]=useState(["java","C","Node"])

    const Handleskills=(event)=>{
        console.log(event.target.value , event.target.checked);
        if(event.target.checked)
        {
            setSkills([...Skills , event.target.value])
        }
        else{
            setSkills([skills.filter((item)=> item!=event.target.value)])
        }
    }

      return(
        <>
        <h1>Select your skills:</h1>
            <input onChange={Handleskills} type="Checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br></br>
            <br></br>

            <input onChange={Handleskills} type="Checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br></br>
            <br></br>


            <input onChange={Handleskills} type="Checkbox" id="C" value="C" />
            <label htmlFor="C">C</label>
            <br></br>
            <br></br>

            <input onChange={Handleskills} type="Checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br></br>

            <h2>{skills.toString()}</h2> 
        </>
      
    )
}
export default Skills;
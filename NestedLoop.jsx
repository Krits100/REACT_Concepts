function Loopii(){
    const collegeData=[
        {
            name:"IET",
            city:"Alwar",
            student:[
                {
                    studentname:"Peter Cat",
                    class:"9B",
                    roll:"22"
                },
                {
                    studentname:"Parry Parker",
                    class:"9A",
                    roll:"34"
                },
                {
                    studentname:"Kriss Pery",
                    class:"9A",
                    roll:"18"
                },
            ]
        },
        {
            name:"IIT",
            city:"Delhi"
        },
        {
            name:"KIT",
            city:"Mumbai"
        }
    ]
    return(
        <div style={{
            backgroundColor:"grey",
            padding:"20px",
            margin:"20px",
            borderRadius:"10px",
            borderBottom:"2px solid black"
        }}>
        <h1>Nested Looping with componenet</h1>
        {
            collegeData.map((user)=>(
                <> 
                <h3>Name: {user.name}</h3>
                <ul>
                    <li>
                        <h4>City: {user.city}</h4>
                    </li>
                    <ul>
                        {
                            user.student && user.student.map((student)=>(
                                <>
                                <ul>
                                        <h5>Student_Name:{student.studentname}</h5>
                                </ul>
                                <ul>
                                     <h5>Class:{student.class}</h5>
                                </ul>
                                <ul>
                                    <h5>Roll_No:{student.roll}</h5>
                                </ul>
                                    
                                </>
                            ))
                        }
                    </ul>
                                       
                 
                </ul>
                
                </>
            ))
        }
        </div>
    )
}
export default Loopii;

/*
 <li>
                        
                    </li>
                    */
function Loop(){
//array of object:
    const userData=[
        {
            name:'Peter Morecse',
            age: '18',
            email:'petertext@gmail.com',
            id:1,
        },
        {
            name:'Anil Roy',
            age: '18',
            email:'aniltext@gmail.com',
            id:2,
        },
        {
            name:'Bruce Funky',
            age: '18',
            email:'brucetext@gmail.com',
            id:3,
        }
    ];
    return(
        //use map function loop er jonno
        <>
            <h1>Loop in JSX with Map Function</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData.map((user)=>(
                             <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </>
    )
}
export default Loop;
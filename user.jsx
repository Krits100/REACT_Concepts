const User=({data})=>{
    return (
        <div
        style={{
            border: "1px solid black",
            padding : "10px",
            margin: "10px",
            width:"400px",
            borderRadius: "10px"

        }}>
        <h3>Fruit:<span style={{color:'green'}}>{data.fruit}</span></h3>
        <h3>Price::<span style={{color:'green'}}>{data.price}</span></h3>
        <h3>Quantity:<span style={{color:'green'}}>{data.quantity}</span></h3>
        <h3>Taste:<span style={{color:'green'}}>{data.taste}</span></h3>
        </div>
    )
}
export default User;
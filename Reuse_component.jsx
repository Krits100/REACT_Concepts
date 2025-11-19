import User from "./user";
function Reuse(){

    const userData=[
        {
            fruit:'Mango',
            price: '80',
            quantity: 4,
            taste : 'sweet',
        },
        {
            fruit:"Banana",
            price: '40',
            quantity: 6,
            taste : 'sweet',
        },
        {
            fruit:"Watermelon",
            price: '150',
            quantity: 2,
            taste : 'sweet',
        },
        {
            fruit:"Pinapple",
            price: '130',
            quantity: 1,
            taste : 'sweet',
        }
    ];
    return(
        /*<>
            <h2>Practice the loop and see the resus of a component in a loop</h2>
            <table border="1">
                <thead>
                    <th>Fruits</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Taste</th>
                </thead>
                <tbody>
                    {
                        data.map((item)=>(
                            <tr>
                                <td>{item.fruit}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.taste}</td>
                            </tr> 
                         )) 
                    }
                </tbody>
            </table>

        </>*/

        <>
        {
            userData.map((item)=>(
            <div>
                <User data={item} /> 
            </div>
           ))
        }
           
        </>
    )      
}
export default Reuse;

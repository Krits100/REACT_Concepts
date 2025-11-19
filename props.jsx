import App from "./Propsacle"
function Props(param){
    
    return(
        /*<>
            <h2>Name: {param.name}</h2>
            <h2>Age: {param.subject}</h2>
            <h2>email: {param.otherdata}</h2>
        </>*/
        /*<>
            <h2>{param.Userdetails.name}</h2>
            <h2>{param.Userdetails.age}</h2>
            <h2>{param.Userdetails.email}</h2>
            <h2>{param.Userdetails.ph_no}</h2>
        </>*/
        
        <>
            <h2>{param.aldetails}</h2>
        </>
    )
}
export default Props
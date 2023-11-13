


const Form1 = (props) => {

    const handlesubmit = (e) => {
        e.preventDefault()
    }
return(
    <form onSubmit={handlesubmit}>
        <h1>Personal Info</h1>
        <p> Please provide your name, email address, and phone number.</p>
        <label htmlFor="">Name</label>
        <input onChange={(e) => {props.setName(e.target.value)}} value={props.name} placeholder="e.g. Stephen King"></input>
        {console.log(props.email)}
        <label htmlFor=""></label>
        <input onChange={(e) => {props.setEmail(e.target.value)}} value={props.email} placeholder="e.g. stephenking@lorem.com"></input>
        <label htmlFor=""></label>
        <input onChange={(e) => {props.setPhone(e.target.value)}} value={props.phone} placeholder="+1 234 567 890"></input>
        <div>
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
)
}

export default Form1
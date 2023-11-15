import { useState } from "react";

const Form1 = (props) => {
    const [vName, setVName] = useState("Before input")
    const [vEmail, setVEmail] = useState("Before input")
    const [vPhone, setVPhone] = useState("Before input")

    const validator = () => {
        props.name.length >= 3 ? setVName(true) : setVName(false);
        props.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setVEmail(true) : setVEmail(false);
        props.phone.match(/^[0-9 ()+/-]{5,}$/) ? setVPhone(true) : setVPhone(false);
    }

    const handlesubmit = (e) => {
        validator()
        e.preventDefault()
        if(vName === true && vEmail === true && vPhone === true){
            console.log("tf")
            props.setPage(2)
        }
    }
return(<>
    <form onSubmit={handlesubmit}>
    <div className="form-inputpart">
        <h1>Personal Info</h1>
        <p> Please provide your name, email address, and phone number.</p>
        <div className="labelgroup">
            <label htmlFor="name">Name</label>
            <span id={vName === false ? "error" : ""} >This field is required</span>
        </div>
        <input className={vName === false ? "errorinput" : null } onChange={(e) => {props.setName(e.target.value)}} value={props.name} name="name" placeholder="e.g. Stephen King"></input>
        <div className="labelgroup">
            <label htmlFor="email">Email</label>
            <span id={vEmail === false ? "error" : ""} >This field is required</span>
        </div>
        <input className={vEmail === false ? "errorinput" : null } name="email" type="email" onChange={(e) => {props.setEmail(e.target.value)}} value={props.email} placeholder="e.g. stephenking@lorem.com"></input>
        <div className="labelgroup">
            <label htmlFor="phone">Phone</label>
            <span id={vPhone === false ? "error" : ""} >This field is required</span>
        </div>
        <input className={vPhone === false ? "errorinput" : null } name="phone" type="phone"  onChange={(e) => {props.setPhone(e.target.value)}} value={props.phone} placeholder="+1 234 567 890"></input>
    </div>
        <div className="form-submitpart">
            {false ? <button className="backbtn">Go Back</button> : <button className="backbtn hidden">Go Back</button> }
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
    </>
)
}

export default Form1
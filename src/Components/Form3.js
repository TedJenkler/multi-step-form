import { useState } from "react";

const Form3 = (props) => {

    const [online, setOnline] = useState(false);
    const [storage, setStorage] = useState(false);
    const [customProfile, setCustomProfile] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault()
        props.setPage(4)
    }

    const stoprefresh = (e) => {
        e.preventDefault()
    }

    console.log(online)
    console.log(storage)
    console.log(customProfile)

return(<>
    <form onSubmit={stoprefresh}>
    <div className="form-inputpart">
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {setOnline(!online)}} value={online} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Online Services</p>
                <p>Access to multiplayer games</p>
            </div>
            <p>+$1/mo</p>
        </div>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {setStorage(!storage)}} value={storage} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Larger storage</p>
                <p>Extra 1TB of cloud</p>
            </div>
            <p>+$2/mo</p>
        </div>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {setCustomProfile(!customProfile)}} value={customProfile} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Customizable Profile</p>
                <p>Custom theme on your profile</p>
            </div>
            <p>+$2/mo</p>
        </div>
    </div>
        <div className="form-submitpart">
            {true ? <button onClick={(e) => {props.setPage(2)}} className="backbtn">Go Back</button> : null }
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
    </>
)
}

export default Form3

const Form3 = (props) => {

    const handlesubmit = (e) => {
        e.preventDefault()
        props.setPage(4)
    }

    const stoprefresh = (e) => {
        e.preventDefault()
    }

return(<>
    <form onSubmit={stoprefresh}>
    <div className="form-inputpart">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {props.setOnline(!props.online)}} value={props.online} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Online Services</p>
                <p>Access to multiplayer games</p>
            </div>
            <p>{props.toggle === false ? "$1/mo" : "$10/yr" }</p>
        </div>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {props.setStorage(!props.storage)}} value={props.storage} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Larger storage</p>
                <p>Extra 1TB of cloud</p>
            </div>
            <p>{props.toggle === false ? "$2/mo" : "$20/yr" }</p>
        </div>
        <div className="price-addon">
            <input type="checkbox" onChange={(e) => {props.setCustomProfile(!props.customProfile)}} value={props.customProfile} className="addon-checkbox" name="addon"></input>
            <div>
                <p className="bluetext">Customizable Profile</p>
                <p>Custom theme on your profile</p>
            </div>
            <p>{props.toggle === false ? "$2/mo" : "$20/yr" }</p>
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
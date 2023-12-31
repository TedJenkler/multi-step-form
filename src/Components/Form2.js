import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"

const Form2 = (props) => {
    const handlesubmit = (e) => {
        e.preventDefault()
        props.setPage(3)
    }

    const handlebackclick = (e) => {
        props.setToggle(false);
        props.setPage(1);
    }

    const stoprefresh = (e) => {
        e.preventDefault()
    }

return(<>
    <form onSubmit={stoprefresh}>
    <div className="form-inputpart">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="responisve-page2">
        <button onClick={(e) => {props.setCart(props.toggle === false ? "Arcade (Monthly)" : "Arcade (Yearly)");}} value={props.cart} className="price">
            <img src={arcade} alt="Arcade"></img>
            <div>
                <p className="bluetext">Arcade</p>
                <p>{props.toggle === false ? "$9/mo" : "$90/yr" }</p>
                <p className="bluetext">{props.toggle === false ? null : "2 months free" }</p>
            </div>
        </button>
        <button onClick={(e) => {props.setCart(props.toggle === false ? "Advanced (Monthly)" : "Advanced (Yearly)")}} value={props.cart} className="price">
            <img src={advanced} alt="Advanced"></img>
            <div>
                <p className="bluetext">Advanced</p>
                <p>{props.toggle === false ? "$12/mo" : "$120/yr" }</p>
                <p className="bluetext">{props.toggle === false ? null : "2 months free" }</p>
            </div>
        </button>
        <button onClick={(e) => {props.setCart(props.toggle === false ? "Pro (Monthly)" : "Pro (Yearly)")}} value={props.cart} className="price">
            <img src={pro} alt="Pro"></img>
            <div>
                <p className="bluetext">Pro</p>
                <p>{props.toggle === false ? "$15/mo" : "$150/yr" }</p>
                <p className="bluetext">{props.toggle === false ? null : "2 months free" }</p>
            </div>
        </button>
        </div>
    <div className="form-check form-switch checkarea">
        <label className="form-check-label float-left" htmlFor="flexSwitchCheckDefault">Monthly</label>
        <input className="form-check-input" onChange={() => {props.setToggle(!props.toggle)}} value={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label float-right" htmlFor="flexSwitchCheckDefault">Yearly</label>
        </div>
    </div>
        <div className="form-submitpart">
            {props.page >= 2 ? <button onClick={handlebackclick} className="backbtn">Go Back</button> : null }
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
    </>
)
}

export default Form2
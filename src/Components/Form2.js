import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"
import { useState } from "react"

const Form2 = (props) => {
    const [cart, setCart] = useState("")

    console.log(cart)
    const handlesubmit = (e) => {
        e.preventDefault()
        props.setPage(3)
    }

    const stoprefresh = (e) => {
        e.preventDefault()
    }

return(<>
    <form onSubmit={stoprefresh}>
    <div className="form-inputpart">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <button onClick={(e) => {setCart("arcade")}} value={cart} className="price">
            <img src={arcade} alt="Arcade"></img>
            <div>
                <p>Arcade</p>
                <p>$9/mo</p>
            </div>
        </button>
        <button onClick={(e) => {setCart("advanced")}} value={cart} className="price">
            <img src={advanced} alt="Advanced"></img>
            <div>
                <p>Advanced</p>
                <p>$12/mo</p>
            </div>
        </button>
        <button onClick={(e) => {setCart("pro")}} value={cart} className="price">
            <img src={pro} alt="Pro"></img>
            <div>
                <p>Pro</p>
                <p>$15/mo</p>
            </div>
        </button>
    <div className="form-check form-switch checkarea">
        <label className="form-check-label float-left" htmlFor="flexSwitchCheckDefault">Monthly</label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label float-right" htmlFor="flexSwitchCheckDefault">Yearly</label>
        </div>
    </div>
        <div className="form-submitpart">
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
    </>
)
}

export default Form2
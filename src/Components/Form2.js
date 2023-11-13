import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"

const Form2 = (props) => {

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
        <button className="price">
            <img src={arcade} alt="Arcade"></img>
            <div>
                <p>Arcade</p>
                <p>$9/mo</p>
            </div>
        </button>
        <button className="price">
            <img src={advanced} alt="Advanced"></img>
            <div>
                <p>Advanced</p>
                <p>$12/mo</p>
            </div>
        </button>
        <button className="price">
            <img src={pro} alt="Pro"></img>
            <div>
                <p>Pro</p>
                <p>$15/mo</p>
            </div>
        </button>
    <div class="form-check form-switch checkarea">
        <label class="form-check-label label-left" for="flexSwitchCheckDefault">Monthly</label>
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label label-right" for="flexSwitchCheckDefault">Yearly</label>
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
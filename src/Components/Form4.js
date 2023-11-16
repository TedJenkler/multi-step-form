
const Form4 = (props) => {

    const handlesubmit = (e) => {
        e.preventDefault()
        props.setPage(5)
    }

    const stoprefresh = (e) => {
        e.preventDefault()
    }

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;

return(<>
    <form onSubmit={stoprefresh}>
    <div className="form-inputpart">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="summary">
            <div>
                <p>{props.cart}</p>
                <a onClick={(e) => {props.setPage(2)}}><p id="change">Change</p></a>
            </div>
            <p className="p4-price">
                {props.cart === "Arcade (Monthly)" ? "$9/mo" : null}
                {props.cart === "Arcade (Yearly)" ? "$90/yr" : null}
                {props.cart === "Advanced (Monthly)" ? "$12/mo" : null}
                {props.cart === "Advanced (Yearly)" ? "$120/yr" : null}
                {props.cart === "Pro (Monthly)" ? "$15/mo" : null}
                {props.cart === "Pro (Yearly)" ? "$150/yr" : null}
            </p>
        </div>
        <div className="summary-part2">
            <div>
                <p>{props.online === true ? "Online service" : null}</p>
                <p className="p4-price">{props.online === true ? props.toggle === true ? "+$10/yr" : "+$1/mo" : null}</p>
            </div>
            <div>
                <p>{props.storage === true ? "Larger storage" : null}</p>
                <p className="p4-price">{props.storage === true ? props.toggle === true ? "+$20/yr" : "+$2/mo" : null}</p>
            </div>
            <div>
                <p>{props.customProfile === true ? "Custom profile" : null}</p>
                <p className="p4-price">{props.customProfile === true ? props.toggle === true ? "+$20/yr" : "+$2/mo" : null}</p>
            </div>
        </div>
        <div className="totalpart">
            <p>Total {props.toggle === true ? "(per year)" : "(per month)"}</p>
            <p className="mathblock">
            {props.cart === "Arcade (Monthly)" ? sum1 = 9 : null}
            {props.cart === "Arcade (Yearly)" ? sum1 = 90 : null}
            {props.cart === "Advanced (Monthly)" ? sum1 = 12 : null}
            {props.cart === "Advanced (Yearly)" ? sum1 = 120 : null}
            {props.cart === "Pro (Monthly)" ? sum1 = 15 : null}
            {props.cart === "Pro (Yearly)" ? sum1 = 150 : null}
            {props.online === true ? props.toggle === true ? sum2 = 10 : sum2 = 1 : null}
            {props.storage === true ? props.toggle === true ? sum3 = 20 : sum3 = 2 : null}
            {props.customProfile === true ? props.toggle === true ? sum4 = 20 : sum4 = 2 : null}
            </p>
            <p className="totalprice">${sum1 + sum2 + sum3 + sum4}{props.toggle === true ? "/yr" : "/mo"}</p>
        </div>
    </div>
        <div className="form-submitpart">
            {true ? <button onClick={(e) => {props.setPage(3)}} className="backbtn">Go Back</button> : null }
            <button className="btn-confirm" onClick={handlesubmit}>Confirm</button>
        </div>
    </form>
    </>
)
}

export default Form4
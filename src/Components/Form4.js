
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
            <p>{props.cart}</p>
            <a onClick={(e) => {props.setPage(2)}}><p>Change</p></a>
            <p>
                {props.cart === "arcade (Monthly)" ? "$9" : null}
                {props.cart === "arcade (Yearly)" ? "$90" : null}
                {props.cart === "advanced (Monthly)" ? "$12" : null}
                {props.cart === "advanced (Yearly)" ? "$120" : null}
                {props.cart === "pro (Monthly)" ? "$15" : null}
                {props.cart === "pro (Yearly)" ? "$150" : null}
            </p>
        </div>
        <div className="summary">
            <div>
                <p>{props.online === true ? "Online service" : null}</p>
                <p>{props.online === true ? props.toggle === true ? "$10/yr" : "$1/mo" : null}</p>
            </div>
            <div>
                <p>{props.storage === true ? "Larger storage" : null}</p>
                <p>{props.storage === true ? props.toggle === true ? "$20/yr" : "$2/mo" : null}</p>
            </div>
            <div>
                <p>{props.customProfile === true ? "Custom profile" : null}</p>
                <p>{props.customProfile === true ? props.toggle === true ? "$20/yr" : "$2/mo" : null}</p>
            </div>
        </div>
        <p>Total {props.toggle === true ? "(per year)" : "(per month)"}</p>
        <p className="mathblock">
        {props.cart === "arcade (Monthly)" ? sum1 = 9 : null}
        {props.cart === "arcade (Yearly)" ? sum1 = 90 : null}
        {props.cart === "advanced (Monthly)" ? sum1 = 12 : null}
        {props.cart === "advanced (Yearly)" ? sum1 = 120 : null}
        {props.cart === "pro (Monthly)" ? sum1 = 15 : null}
        {props.cart === "pro (Yearly)" ? sum1 = 150 : null}
        {props.online === true ? props.toggle === true ? sum2 = 10 : sum2 = 1 : null}
        {props.storage === true ? props.toggle === true ? sum3 = 20 : sum3 = 2 : null}
        {props.customProfile === true ? props.toggle === true ? sum4 = 20 : sum4 = 2 : null}
        </p>
        <p>${sum1 + sum2 + sum3 + sum4}{props.toggle === true ? "/yr" : "/mo"}</p>
    </div>
        <div className="form-submitpart">
            {true ? <button onClick={(e) => {props.setPage(3)}} className="backbtn">Go Back</button> : null }
            <button onClick={handlesubmit}>Next Step</button>
        </div>
    </form>
    </>
)
}

export default Form4
import logo from "../images/icon-thank-you.svg"

const Conformation = () => {

return(<>
    <form>
    <div id="conformation" className="form-inputpart">
        <img id="logo" src={logo} alt="logo"></img>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
    </form>
    </>
)
}

export default Conformation
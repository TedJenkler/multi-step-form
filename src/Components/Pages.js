
const Pages = (props) => {
return(
    <div className="row pagecomponent">
        <div className="pageindex">
            {props.page == 1 ? <span id="i1-active">1</span> : <span id="i1">1</span> }
            {props.page == 2 ? <span id="i2-active">2</span> : <span id="i2">2</span> }
            {props.page == 3 ? <span id="i3-active">3</span> : <span id="i3">3</span> }
            {props.page >= 4 ? <span id="i4-active">4</span> : <span id="i4">4</span> }
        </div>
        <div className="responsive-pageindex">
            {props.page == 1 ? <span id="i1-active">1</span> : <span id="i1">1</span> }
            <div className="responsive-pagecomponent">
                <p>Step 1</p>
                <p className="whiteboldtext">YOUR INFO</p>
            </div>
        </div>
        <div className="responsive-pageindex">
            {props.page == 2 ? <span id="i2-active">2</span> : <span id="i2">2</span> }
            <div className="responsive-pagecomponent">
                <p>Step 2</p>
                <p className="whiteboldtext" >SELECT PLAN</p>
            </div>
        </div>
        <div className="responsive-pageindex">
            {props.page == 3 ? <span id="i3-active">3</span> : <span id="i3">3</span> }
            <div className="responsive-pagecomponent">
                <p>Step 3</p>
                <p className="whiteboldtext">ADD-ONS</p>
            </div>
        </div>
        <div className="responsive-pageindex">
            {props.page >= 4 ? <span id="i4-active">4</span> : <span id="i4">4</span> }
            <div className="responsive-pagecomponent">
                <p>Step 4</p>
                <p className="whiteboldtext">SUMMARY</p>
            </div>
        </div>
    </div>
)
}

export default Pages
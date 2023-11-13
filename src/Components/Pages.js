
const Pages = (props) => {
return(
    <div className="row pagecomponent">
        <div className="pageindex">
            {props.page == 1 ? <span id="i1-active">1</span> : <span id="i1">1</span> }
            <span id="i2">2</span>
            <span id="i3">3</span>
            <span id="i4">4</span>
        </div>
    </div>
)
}

export default Pages
import "./Button.css"
function Button(props){
    return(
        <div>
            <button onClick={props.updateName} className="btn">Save</button>
        </div>
    )
}
export default Button;
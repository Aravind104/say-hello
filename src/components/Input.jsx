import "./Input.css"
function Input(props){ 
    return(
        <div>
            <input placeholder="Enter your name" value={props.input} onChange={props.updateInput} className="input-style"/>
        </div>
    )
}
export default Input 
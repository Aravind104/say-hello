import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import "./App.css"
function App(){
    const [input,setValue]=useState("");
    function updateInput(e){
        setValue(e.target.value);
    }
    const [name,setName]=useState("Aravind");
    function updateName(e){
        e.preventDefault();
        setName(input);
        setValue("");
    }
    return(
        <div className="box">
            <Header name={name} />
            <Input input={input} updateInput={updateInput}/>
            <Button updateName={updateName}/>
        </div>
    )
}
export default App;
// Code Keypad Component Here

function handleChange(event){
    console.log("Entering password...");
}

function Keypad (){
    return (
        <div>
            <input onChange={handleChange} type="password" placeholder="Enter your password" />
        </div>
    )
}

export default Keypad;
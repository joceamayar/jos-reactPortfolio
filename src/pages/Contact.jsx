import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    var [errorMessage, setErrorMessage] = useState("");
    var [errorEmailMessage, setEmailErrorMessage] = useState("");

    // var stuff = useState(""); // [primitiveType,function that changes the value]
    // var errorMessage = stuff[0];
    // var setErrorMessage = stuff[1];

    // var errorMessage = "";
    // errorMessage = "You have an invalid email address"
    // reactReloadTemplate(errorMessage)
    // //

    function validateName(){
        if(name.length===0) {
            setErrorMessage("Name cannot be empty")
        } else {
            setErrorMessage("")
        }
    }

    function validateEmail(){

        const isValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) 

        if(!isValid) {
            setEmailErrorMessage("You have an invalid email address");
        } else {
            setEmailErrorMessage("")
        }

    }

    function submitMessege(params) {



    }

    return (
        <>
        <form>
            <div class="form-row">
                <div class="col">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" placeholder="First name"
                           onChange={(e) => {setName(e.target.value); validateName();}} 
                           onBlur={(e)=>{ validateName(); }}  
                           onMouseEnter={(e)=> validateName()}
                        >
                     </input>
                </div>
            </div>
            
            <div class="form-row"></div>

            <div class="form-group col-md-6">
                <label for="inputEmail4">Email address </label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)} onBlur={(e)=> validateEmail()} ></input>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                         onChange={(e) => setMessege(e.target.value)}></textarea>
               
                
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>

        <div> 
            {errorMessage}
        </div>
        <div> 
            {errorEmailMessage}
        </div>

        </>
    );

}

export default Contact;

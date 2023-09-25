import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorNameMessage, setErrorNameMessage] = useState("");
    const [errorEmailMessage, setEmailErrorMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function validateName() {
        if (name.length === 0) {
            setErrorMessage("Name cannot be empty")
        } else {
            setErrorNameMessage("")
        }
    }

    function validateEmail() {

        const isValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

        if (!isValid) {
            setEmailErrorMessage("You have an invalid email address");
        } else {
            setEmailErrorMessage("")
        }
    }

    function validateMessage() {
        if (message.length === 0) {
            setErrorMessage("Message  cannot be empty")
        } else {
            setErrorMessage("")
        }
    }

    return (
        <>
            <form>
                <div className="form-row">
                    <div className="col">
                        <label for="inputEmail4">Name</label>
                        <input type="text" className="form-control" placeholder="First name"
                            onChange={(e) => { setName(e.target.value); validateName(); }}
                            onBlur={(e) => { validateName(); }}
                            onMouseEnter={(e) => validateName()}
                        >
                        </input>
                    </div>
                </div>

                <div className="form-row"></div>

                <div className="form-group col-md-6">
                    <label for="inputEmail4">Email address </label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                        onChange={(e) => { setEmail(e.target.value); validateEmail(); }}
                        onBlur={(e) => { validateEmail(); }}
                        onMouseEnter={(e) => validateEmail()}

                        >
                        </input>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        onChange={(e) => { setMessage(e.target.value); validateMessage(); }}
                        onBlur={(e) => { validateMessage(); }}
                        onMouseEnter={(e) => validateMessage()}
                    >
                    </textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

            <div>
                {errorNameMessage}
            </div>
            <div>
                {errorEmailMessage}
            </div>
            <div>
                {errorMessage}
            </div>

        </>
    );

}

export default Contact;

// let stuff = useState(""); // [primitiveType,function that changes the value]
// let errorMessage = stuff[0];
// let setErrorMessage = stuff[1];

// let errorMessage = "";
// errorMessage = "You have an invalid email address"
// reactReloadTemplate(errorMessage)
// //
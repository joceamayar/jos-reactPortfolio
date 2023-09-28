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
            <div>
                <p id="contactMeText"> Are you intersted in collaborating? Lets get in touch! </p>

                <div className="contactMeForm">
                    <form>
                        <h4>Contact me</h4>
                        <div className="inputDiv">
                        <input type="text" className="inputBox" placeholder="Your Name"
                            onChange={(e) => { setName(e.target.value); validateName(); }}
                            onBlur={(e) => { validateName(); }}
                            onMouseEnter={(e) => validateName()}
                        >
                        </input>
                        </div>

                        <div className="inputDiv">
                        <input type="email" className="inputBox" id="inputEmail4" placeholder="Your Email"
                            onChange={(e) => { setEmail(e.target.value); validateEmail(); }}
                            onBlur={(e) => { validateEmail(); }}
                            onMouseEnter={(e) => validateEmail()}
                        >
                        </input>
                        </div>
                        <div className="inputDiv">
                        <textarea className="inputBox" id="exampleFormControlTextarea1" placeholder="Write a message..." rows="3"
                            onChange={(e) => { setMessage(e.target.value); validateMessage(); }}
                            onBlur={(e) => { validateMessage(); }}
                            onMouseEnter={(e) => validateMessage()}
                        >
                        </textarea>
                        </div>

                        <button type="submit" className="sendMessage">Send Message</button>

                        <div>
                            {errorNameMessage}
                        </div>
                        <div>
                            {errorEmailMessage}
                        </div>
                        <div>
                            {errorMessage}
                        </div>
                    </form>

                    <div id="contactCard">

                        <h5>Reach out via email or phone:</h5>

                            <div className="phone">
                                <img src="./src/assets/phone-icon.png" alt="Phone Icon" id="icon"></img>
                                <span>+123-456-7890</span>
                            </div>

                            <div className="email">
                                <img src="./src/assets/email-icon.png"  alt="Email Icon" id="icon"></img>
                                <span>example@example.com</span>
                            </div>

                    </div>



                </div>

            </div>



        </>
    );

}

export default Contact;




//Note to self
// let stuff = useState(""); // [primitiveType,function that changes the value]
// let errorMessage = stuff[0];
// let setErrorMessage = stuff[1];

// let errorMessage = "";
// errorMessage = "You have an invalid email address"
// reactReloadTemplate(errorMessage)
// //
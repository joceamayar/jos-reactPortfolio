import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessege] = useState("");

    function SubmitMessege(params) {

    }

    return (
        <form>
            <div class="form-row">
                <div class="col">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" placeholder="First name"></input>
                </div>
            </div>
            
            <div class="form-row"></div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email address </label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Messeage</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );

}

export default Contact;

import "./contact.scss"
import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm("service_nfy2rt1", "template_cwj0khq", e.target, "user_Ffuv1b64T7SvYwrosNZI8")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }




    return (
        <div className = "contact" id="contact">
           <div className="left">
                <img src="assets/shake.svg"></img>
           </div>
           <div className="right">
               <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name ="name"/>
                    <input type="email" placeholder="Email Address" name ="email"/>
                    <input type="text" placeholder="Subject" name ="subject"/>
                    <textarea placeholder="Your message" name ="message"/>
                    <button>Send Message</button>
                </form>
           </div>
        </div>
    )
}

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gavhrlt",
        "contact_form",
        form.current,
        "IW1smwQ9EUCwT62xy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-info">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-info">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-info">
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Link to="/success">
          <button className="form-submit see-through-button">
            <input type="submit" value="Send" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Contact;

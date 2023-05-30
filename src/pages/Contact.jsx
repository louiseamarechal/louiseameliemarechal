import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './style/Contact.css'

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_gavhrlt', 'contact_form', form.current, 'IW1smwQ9EUCwT62xy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className='contact-page'>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <div className='form-info'>
                    <label>Name</label>
                    <input type="text" name="user_name" required/>
                </div>
                <div className='form-info'>
                    <label>Email</label>
                    <input type="email" name="user_email" required/>
                </div>
                <div className='form-info'>
                    <label>Message</label>
                    <textarea name="message" required/>
                </div>
                <button className='see-through-button'>
                    <input type="submit" value="Send" />
                </button>
            </form>
        </div>
    );
}

export default Contact;

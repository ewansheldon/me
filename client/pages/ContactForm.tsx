import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm = () => {
  const [ submitted, setSubmitted ] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    const res:EmailJSResponseStatus = await emailjs.sendForm(
      'contact_form',
      'contact_form',
      e.currentTarget,
      'xDxS_YLvC_o3Igw8n'
    )
    if (res.status === 200) setSubmitted(true);
  }

  return (
    <div className="contact-form-container">
      { submitted ? 
        <p>Thanks! I will be in touch with you shortly.</p> :
        <form onSubmit={sendEmail}>
          <label>NAME</label>
          <input type="text" name="user_name" />
          <label>EMAIL</label>
          <input type="email" name="user_email" />
          <label>MESSAGE</label>
          <textarea name="message" />
          <input type="submit" value="SEND" disabled={false} />
        </form>
      }
    </div>
  );
};

export default ContactForm;
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

enum Status {
  None, Sending, Sent, Error
}

const ContactForm = () => {
  const [ status, setStatus ] = useState<Status>();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setStatus(Status.Sending);
    const res:EmailJSResponseStatus = await emailjs.sendForm(
      'contact_form',
      'contact_form',
      e.currentTarget,
      'xDxS_YLvC_o3Igw8n'
    )

    res.status === 200 ? setStatus(Status.Sent) : setStatus(Status.Error);
  }

  return (
    <>
      <h1 role="heading">Contact me</h1>
      <p>If you are interested in working with me, please get in touch with me below.</p>
      <div className="contact-form-container" id="contact-form">
        {
          !status &&
            <form onSubmit={sendEmail}>
              <label>NAME</label>
              <input type="text" name="user_name" required={true} aria-label="user-name" />
          
              <label>EMAIL</label>
              <input type="email" name="user_email" required={true} aria-label="user-email" />
              <label>MESSAGE</label>
              <textarea name="message" required={true} aria-label="message" />
              <input type="submit" value="SEND" />
            </form>
        }
        {
          status === Status.Sending &&
            <p>Sending ...</p>
        }
        {
          status === Status.Sent &&
            <p>Thanks! I will be in touch with you shortly.</p>
        }
        {
          status === Status.Error &&
            <p>Uh oh, try again shortly.</p>
        }
      </div>
    </>
  );
};

export default ContactForm;
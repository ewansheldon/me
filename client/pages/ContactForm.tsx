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
    <div className="contact-form-container">
      {
        !status &&
          <form onSubmit={sendEmail}>
            <label>NAME</label>
            <input type="text" name="user_name" required={true} />
            <label>EMAIL</label>
            <input type="email" name="user_email" required={true} />
            <label>MESSAGE</label>
            <textarea name="message" required={true} />
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
  );
};

export default ContactForm;
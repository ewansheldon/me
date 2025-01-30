import React from "react";
import "../App.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    const res = emailjs.sendForm(
      'contact_form',
      'contact_form',
      e.currentTarget,
      'xDxS_YLvC_o3Igw8n'
    )
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" disabled={false} />
      </form>
    </>
  );
};

export default ContactForm;
import React from "react";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import { ToastProvider } from 'react-toast-notifications'

const Contact = () => {
  return (
      <>
    <ContactIntro />
    <ToastProvider >
    <ContactForm />
    </ToastProvider >
    </>

  );
};

export default Contact;

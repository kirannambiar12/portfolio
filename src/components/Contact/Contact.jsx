import React from "react";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import { ToastProvider } from "react-toast-notifications";
import MetaTags from "react-meta-tags";


const Contact = () => {
  return (
    <>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/contact" />
      </MetaTags>
      <ContactIntro />
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    </>
  );
};

export default Contact;

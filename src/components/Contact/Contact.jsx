import React from "react";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import Head from "../layout/Head";

const Contact = () => {
  return (
    <>
      <Head url="contact" title="Kiran Nambiar | Contact Us" />
      <ContactIntro />
      <ContactForm />
    </>
  );
};

export default Contact;

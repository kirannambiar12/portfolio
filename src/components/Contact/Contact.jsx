import React from "react";
import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import MetaTags from "react-meta-tags";

const Contact = () => {
  return (
    <>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/contact" />
      </MetaTags>
      <ContactIntro />
      <ContactForm />
    </>
  );
};

export default Contact;

import React from "react";
import AboutIntro from "./AboutIntro";
import AboutDeveloper from "./AboutDeveloper";
import MetaTags from "react-meta-tags";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/about" />
        <meta property="og:image" content={about} />
      </MetaTags>
      <AboutIntro />
      <AboutDeveloper />
    </>
  );
};

export default About;

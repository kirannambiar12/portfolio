import React from "react";
import AboutIntro from "./AboutIntro";
import AboutDeveloper from "./AboutDeveloper";
import MetaTags from "react-meta-tags";


const About = () => {
  return (
      <>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/about" />
      </MetaTags>
    <AboutIntro />
    <AboutDeveloper />
    </>
  );
};

export default About;

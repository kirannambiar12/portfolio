import React from "react";
import AboutIntro from "./AboutIntro";
import AboutDeveloper from "./AboutDeveloper";
import Head from "../../layout/Head";

const About = () => {
  return (
    <>
    <Head url="about" title="Kiran Nambiar | About" />
      <AboutIntro />
      <AboutDeveloper />
    </>
  );
};

export default About;

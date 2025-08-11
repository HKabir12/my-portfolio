import React from "react";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contract/Contact";
import AboutMe from "../AboutMe/AboutMe";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      < AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      < Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;

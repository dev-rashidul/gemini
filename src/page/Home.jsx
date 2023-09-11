import React from "react";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Platform from "../components/Platform/Platform";
import Work from "../components/Work/Work";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";

const Home = () => {
  return (
    <>
      {/* Header Section JSX Start */}

      <Header />

      {/* Header Section JSX End */}

      {/* Hero Section JSX Start */}

      <Hero />

      {/* Hero Section JSX End */}

      {/* Work Section JSX Start */}

      <Work></Work>

      {/* Work Section JSX End */}

      {/* Key Features Section JSX Start */}

      <Features></Features>

      {/* Key Features Section JSX End */}

      {/* Platform Section JSX Start */}

      <Platform></Platform>

      {/* Platform Section JSX End */}

      {/* About Us Section JSX Start */}

      <About></About>

      {/* About Us Section JSX End */}

      {/* Footer Section JSX Start */}

      <Footer></Footer>

      {/* Footer Section JSX End */}
    </>
  );
};

export default Home;

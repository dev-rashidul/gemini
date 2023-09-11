import React from "react";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
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

      {/* Key Features Section HTML Start */}

      <Features></Features>

      {/* Key Features Section HTML End */}
    </>
  );
};

export default Home;

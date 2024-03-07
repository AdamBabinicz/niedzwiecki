import React from "react";
import Hero from "../components/Hero/Hero";
import BrandLogo from "../components/BrandLogo/BrandLogo";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import BlogsComp from "../Blogs/BlogsComp";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <BlogsComp />
    </>
  );
};

export default Home;

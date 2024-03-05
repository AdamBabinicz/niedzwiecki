import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandLogo from "./components/BrandLogo/BrandLogo";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogsComp from "./Blogs/BlogsComp";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";
import Policy from "./components/Policy/Policy";
import CookieConsent from "react-cookie-consent";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polityka-prywatnosci" element={<Policy />} />
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => (
  <>
    <Hero />
    <BrandLogo />
    <Services />
    <Testimonials />
    <BlogsComp />
    <Footer />
    <CookieConsent
      debug={true}
      location="bottom"
      style={{
        background: "#333",
        textAlign: "left",
        paddingBottom: "1rem",
        fontSize: "16px",
        fontFamily: "Gideon Roman",
      }}
      buttonStyle={{
        color: "#333",
        background: "#fff",
        fontSize: "18px",
        fontFamily: "Gideon Roman",
        marginRight: "1rem",
      }}
      buttonText="OK, rozumiem"
      expires={365}
    >
      "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
      Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
      indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
      dotyczących cookies oznacza, że będą one zamieszczane w Państwa urządzeniu
      końcowym. Możecie Państwo dokonać w każdym czasie zmiany ustawień
      dotyczących cookies."
    </CookieConsent>
  </>
);

export default App;

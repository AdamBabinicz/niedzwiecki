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
  </>
);

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useEffect } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import BrandLogo from "./components/BrandLogo/BrandLogo";
// import Services from "./components/Services/Services";
// import Testimonials from "./components/Testimonials/Testimonials";
// import BlogsComp from "./Blogs/BlogsComp";
// import Footer from "./components/Footer/Footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ScrollToTop from "./ScrollToTop";
// import Policy from "./components/Policy/Policy";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
//       <Router>
//         <Navbar />
//         <Hero />
//         <BrandLogo />
//         <Services />
//         <Testimonials />
//         <BlogsComp />
//         <ScrollToTop />
//         <Footer />
//         <Routes>
//           <Route path="/polityka-prywatnosci" element={<Policy />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import BrandLogo from "./components/BrandLogo/BrandLogo";
// import Services from "./components/Services/Services";
// import Testimonials from "./components/Testimonials/Testimonials";
// import BlogsComp from "./Blogs/BlogsComp";
// import Footer from "./components/Footer/Footer";
// import Policy from "./components/Policy/Policy";
// import ScrollToTop from "./ScrollToTop";

// const App = () => {
//   return (
//     <Router>
//       <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <BrandLogo />
//                 <Services />
//                 <Testimonials />
//                 <BlogsComp />
//                 <ScrollToTop />
//                 <Footer />
//               </>
//             }
//           />
//           <Route path="/polityka-prywatnosci" element={<Policy />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

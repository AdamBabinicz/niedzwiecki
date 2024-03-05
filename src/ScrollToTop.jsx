// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Wykrywanie przewinięcia strony
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   // Funkcja do przewijania strony do góry
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {isVisible && (
//         <div
//           className="fixed bottom-5 right-3 z-50 dark:bg-white bg-gray-800 p-2 rounded-full cursor-pointer dark:hover:bg-gray-200 dark:transition-colors hover:bg-gray-700 transition-colors"
//           onClick={scrollToTop}
//         >
//           <FaArrowUp className="text-white text-2xl dark:text-gray-800" />
//         </div>
//       )}
//     </>
//   );
// };

// export default ScrollToTop;

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Funkcja do przewijania strony do góry
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Wykrywanie przewinięcia strony
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Przewijanie do góry przy zmianie ścieżki
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-5 right-3 z-50 dark:bg-white bg-gray-800 p-2 rounded-full cursor-pointer dark:hover:bg-gray-200 dark:transition-colors hover:bg-gray-700 transition-colors"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white text-2xl dark:text-gray-800" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

import React from "react";
import { GiTeacher } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { PiShapesFill } from "react-icons/pi";

const BrandLogo = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="container py-12">
          <h2 data-aos="fade-up" className="text-center text-3xl font-semibold">
            Wartości życiowe:
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32"
          >
            <p className="text-2xl flex items-center gap-2 font-semibold">
              <GiTeacher /> uczyć
            </p>
            <p className="text-2xl flex items-center gap-2 font-semibold">
              <FaHandsHelping /> pomagać
            </p>
            <p className="text-2xl flex items-center gap-2 font-semibold">
              <PiShapesFill /> wychowywać
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogo;

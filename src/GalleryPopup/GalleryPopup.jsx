import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"; // Ikony

const GalleryPopup = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Stan przechowujący indeks aktualnie wyświetlanego zdjęcia

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-4xl relative">
        <button
          className="absolute top-4 right-4 dark:bg-white bg-white p-2 rounded-full cursor-pointer dark:hover:bg-gray-200 dark:transition-colors hover:bg-gray-200 transition-colors focus:outline-none z-10"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Przyciski przewijania */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 dark:bg-white bg-white p-2 rounded-full cursor-pointer dark:hover:bg-gray-200 dark:transition-colors hover:bg-gray-200 transition-colors focus:outline-none"
          style={{ zIndex: 11 }}
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 dark:bg-white bg-white p-2 rounded-full cursor-pointer dark:hover:bg-gray-200 dark:transition-colors hover:bg-gray-200 transition-colors focus:outline-none"
          style={{ zIndex: 11 }}
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default GalleryPopup;

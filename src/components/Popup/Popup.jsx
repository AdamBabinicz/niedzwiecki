import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Popup = ({ onClose, content, popupImage, showImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 mx-3 rounded-lg shadow-lg max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <IoClose className="h-6 w-6" />
        </button>
        {showImage && popupImage && (
          <div className="mb-4">
            <img
              src={popupImage}
              alt="Popup Image"
              className="w-full rounded-lg"
            />
          </div>
        )}
        <div className="text-gray-800">{content}</div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;

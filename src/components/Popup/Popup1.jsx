import React, { useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Funkcja do zamknięcia pop-upa
  const handleClosePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 mx-3 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">
              „Wprowadzić szachy do programu szkolnego”
            </h2>
            <p>
              Celem kampanii jest realizacja pomysłu aby do programu szkolnego
              wprowadzić nauczanie szachów. Dotyczy to przede wszystkim programu
              nauczania wczesnoszkolnego, czyli klas I-III szkół podstawowych.
              Wiemy, jakie korzyści dzieci nabywają ucząc się szachów.
            </p>
            {/* Przycisk do zamykania pop-upa */}
            <button
              className="text-white bg-red-500 px-4 py-2 mt-4 rounded hover:bg-red-600"
              onClick={handleClosePopup}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

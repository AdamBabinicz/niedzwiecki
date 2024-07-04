import React, { useState } from "react";
import HeroImg from "../../assets/35.webp";
import Popup from "../Popup/Popup";

const Hero = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Stan do kontrolowania widoczności pop-upa

  const handleShowPopup = () => {
    setIsPopupVisible(true); // Ustaw stan widoczności pop-upa na true po kliknięciu przycisku
  };

  return (
    <>
      <main className="bg-white dark:bg-gray-950 dark:text-white duration-300">
        <div className="container min-h-[620px] flex pt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img src={HeroImg} alt="..." />
              <div
                data-aos="slide-right"
                data-aos-delay="300"
                className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 right-0 sm:-right-8"
              >
                <p className="text-gray-500 text-sm dark:text-white ">
                  👍 Zasłużeni
                </p>
                <h2 className="font-bold">
                  Radomianie <span className="font-normal"> 🏆</span>
                </h2>
              </div>
            </div>
            {/* Text content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                "Szachy <span className="text-primary">moje wszystko"</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Gra w&nbsp;szachy ma ogromny wpływ na kształtowanie osobowości
                człowieka. Oprócz konkretnych umiejętności, takich jak
                koncentracja, umiejętność analizy i&nbsp;szybkie podejmowanie
                decyzji, szachy mają ogólny wpływ na rozwój charakteru.
                Szachiści wykształcają cechy osobowościowe, których trudno
                zdobyć w&nbsp;innych dyscyplinach sportowych. Gra w&nbsp;szachy
                stanowi doskonały trening dla mózgu. Podobnie jak inne mięśnie,
                mózg wymaga regularnych ćwiczeń. Badania naukowe sugerują, że
                aktywne korzystanie z&nbsp;mózgu może zmniejszać ryzyko
                wystąpienia chorób neurodegeneracyjnych, takich jak Alzheimer.
                Dlatego też warto zachęcać ludzi do gry w&nbsp;szachy - to nie
                tylko rozrywka, ale również inwestycja w&nbsp;zdrowie umysłowe.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="btn-primary transition-all duration-300"
                onClick={handleShowPopup}
              >
                Zobacz
              </button>
            </div>
          </div>
        </div>
      </main>
      {isPopupVisible && (
        <Popup
          onClose={() => setIsPopupVisible(false)}
          content="W środowiskach, gdzie brakuje klubów szachowych, najlepszym źródłem nauki są zasoby internetowe. Jak już wspomniałem, na różnych platformach internetowych, takich jak chess.com czy lichess.org, a&nbsp;nawet na YouTube, można znaleźć wiele wartościowych materiałów. Można słuchać transmisji mistrzów lub arcymistrzów szachowych, którzy omawiają różne zagrania, warianty i&nbsp;debiuty. Ja również korzystam z&nbsp;tych źródeł w&nbsp;celu własnego doskonalenia. Ponadto, podczas interesujących turniejów szachowych, komentatorzy i&nbsp;streamerzy analizują wykonywane ruchy, tłumacząc ich sens i&nbsp;strategię, co również stanowi świetne źródło nauki. To wszystko jest dostępne za darmo, co jest niezwykle istotne."
        />
      )}
      {/* Renderuj komponent Popup tylko gdy isPopupVisible jest ustawione na true */}
    </>
  );
};

export default Hero;

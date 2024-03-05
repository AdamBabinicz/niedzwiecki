import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaChessKnight, FaChessBoard } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import Popup from "../Popup/Popup";

const skillsData = [
  {
    name: "Propagowanie nauki gry w szachy",
    icon: <FaChessKnight className="text-4xl text-primary" />,
    link: "#",
    description:
      "„Jestem pewny, że szachy będą kontynuować swój rozwój, niezależnie od zmieniających się warunków społecznych. Ich obecność w kulturze ludzkiej sięga wielu wieków wstecz, a przyszłe pokolenia również będą czerpać z radości z tej gry. Istnienie szachów jest uwarunkowane nie tylko obecnością Internetu, książek czy dostępnością bierkowych zestawów. Możemy powiedzieć, że szachy stanowią również istotny element biznesu. Produkcja bierkowych kompletów, szachownic, zegarów czy wydawanie książek szachowych to istotne gałęzie gospodarki. W końcu, szachy przynoszą zyski - są po prostu opłacalne.”",
    aosDelay: "0",
  },
  {
    name: "Prowadzenie UKS 'Roszada' i Akademii Szachowej",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "„Nasza oferta obejmuje zajęcia w sekcjach szachowej i piłki nożnej. Regularnie organizujemy różnorodne turnieje szachowe oraz prowadzimy szkolenia dla dzieci, młodzieży i dorosłych z zakresu gry w szachy. Dodatkowo oferujemy warsztaty i kursy dla nauczycieli, szczególnie tych pracujących w szkołach podstawowych, aby przygotować ich do nauczania podstawowych zasad gry w szachy uczniom klas 0, I, II i III.”",
    aosDelay: "300",
  },
  {
    name: "Organizowanie turniejów szachowych",
    icon: <FaChessBoard className="text-4xl text-primary" />,
    link: "#",
    description:
      "„Bardzo często w regulaminach opisuję dlaczego taki turniej jest zorganizowany, jaki jest cel turnieju, itd. Tak samo organizuję memoriał szachowy mojego taty, Jana Niedźwieckiego, który nauczył mnie grać w szachy. To jest można powiedzieć taki prywatny pomnik wystawiony swojemu ojcu. Wiadomo, że trzeba dbać o swoich poprzedników.”",
    aosDelay: "500",
  },
  {
    name: "Krzewienie wśród dzieci i młodzieży ducha patriotyzmu i miłości do ojczyzny",
    icon: <IoIosPeople className="text-4xl text-primary" />,
    link: "#",
    description:
      "„O pamięć na cmentarzach, trzeba palić znicze, kwiaty składać, nie tylko w dzień 1 listopada. Mamy też turnieje szachowe, czy to z okazji Bitwy Warszawskiej, czy z okazji ogłoszenia niepodległości przez Polskę.”",
    aosDelay: "700",
  },
];

const Services = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Stan do kontrolowania widoczności pop-upa

  const handleShowPopup = () => {
    setIsPopupVisible(true); // Ustaw stan widoczności pop-upa na true po kliknięciu przycisku
  };

  return (
    <>
      <span id="aktywność"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* header section */}
          <div className="pb-12 text-center space-y-3">
            <h2
              data-aos="fade-up"
              className="text-3xl font-semibold text-violet-950 dark:text-primary"
            >
              Obszary działalności
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Marek Niedźwiecki znany jest w Radomiu ze swojej działalności
              społecznej, edukacyjnej i wychowawczej.
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h2 className="text-lg font-semibold">{skill.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          {/* button section */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="btn-primary" onClick={handleShowPopup}>
              Czytaj więcej
            </button>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <Popup
          onClose={() => setIsPopupVisible(false)}
          content="W sieci dominują szachy płaskie, jednak ja preferuję rozgrywkę w szachy przestrzenne. Pomimo tego, że moja pasja skupia się głównie na grze w szachy przestrzenne, nie zaniedbuję również rozgrywki na tradycyjnych szachownicach. Jako entuzjasta szachów, nie tylko uczestniczę w rozgrywkach, ale również aktywnie angażuję się w rozwiązywanie różnorodnych zadań szachowych. To ważna wskazówka dla tych, którzy dopiero rozpoczynają swoją przygodę z szachami – nie należy ograniczać się wyłącznie do rozgrywania partii, lecz także poświęcić czas na rozwiązywanie zadań szachowych, co znacząco poszerza wiedzę i umiejętności. Istnieje mnóstwo zadań szachowych do wypróbowania, a nawet istnieją rankingi oceniające umiejętności w ich rozwiązywaniu."
        />
      )}
      {/* Renderuj komponent Popup tylko gdy isPopupVisible jest ustawione na true */}
    </>
  );
};

export default Services;

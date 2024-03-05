import React, { useState } from "react";
import Logo from "../../assets/33.webp";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";
import Popup from "../Popup/Popup";
import image from "../../assets/7.webp";

export const MenuLinks = [
  {
    id: 1,
    name: "Migawki",
    link: "/#migawki",
  },
  {
    id: 2,
    name: "Aktywność",
    link: "/#aktywność",
  },
  {
    id: 3,
    name: "W obiektywie",
    link: "/#w-obiektywie",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Stan do kontrolowania widoczności pop-upa

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowPopup = () => {
    setIsPopupVisible(true); // Ustaw stan widoczności pop-upa na true po kliknięciu przycisku
  };

  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={Logo} alt="..." className="w-[100px]" />
                <span className="text-2xl sm:text-3xl font-semibold">
                  Marek Niedźwiecki
                </span>
              </a>
            </div>
            {/* NavLinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a
                        href={link}
                        smooth={true}
                        duration={500}
                        onClick={() => smoothScrollTo(link)}
                        className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                <button className="btn-primary" onClick={handleShowPopup}>
                  Skontaktuj się
                </button>
              </ul>
            </div>
            {/* DarkMode Button */}
            <DarkMode />
            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu section */}
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
      {isPopupVisible && (
        <Popup
          onClose={() => setIsPopupVisible(false)}
          showImage={isPopupVisible}
          popupImage={image}
          content="Uczniowski Klub Sportowy 'ROSZADA' - wstąp i zapisz się! Radom, ul. Mazowieckiego 13, ☎ +48 502 147 317"
        />
      )}
      {/* Renderuj komponent Popup tylko gdy isPopupVisible jest ustawione na true */}
    </>
  );
};

export default Navbar;

import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./Navbar";
import { Link } from "react-router-dom";

const smoothScrollTo = (link) => {
  document.querySelector(link).scrollIntoView({
    behavior: "smooth",
  });
};

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const handleLinkClick = (link) => {
    // Po kliknięciu na link, chowaj menu boczne
    setShowMenu(false);
    const section = document.querySelector(link);
    if (section) {
      smoothScrollTo(link);
    }
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-300 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`}
    >
      <div className="card">
        {/* user section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h2>Szachista</h2>
            <h3 className="text-sm text-slate-500">z urodzenia</h3>
          </div>
        </div>
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <Link
                    to={link}
                    className="mb-5 inline-block"
                    onClick={() => handleLinkClick(link)} // Przekazanie linku jako argument do handleLinkClick
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* footer section */}
      <div>
        <h2>Radom 2024 - {new Date().getFullYear()}.</h2>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

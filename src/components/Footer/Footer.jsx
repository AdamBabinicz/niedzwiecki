import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import imgU from "../../assets/34.webp";

const FooterLinks = [
  {
    title: "Migawki",
    link: "/#migawki",
  },
  {
    title: "Aktywność",
    link: "/#aktywność",
  },
  {
    title: "W obiektywie",
    link: "/#w-obiektywie",
  },
];
const HelpLinks = [
  // {
  //   title: "Customer Support",
  //   link: "/#support",
  // },
  // {
  //   title: "Delivery Details",
  //   link: "/#delivery-details",
  // },
  // {
  //   title: "Terms & Conditions",
  //   link: "/#terms",
  // },
  {
    title: "",
    link: "http://roszada.radom.pl",
    img: imgU,
  },
];
const ResourcesLinks = [
  {
    title: "Korepetycje",
    link: "https://www.e-korepetycje.net/marekniedzwiecki/szachy",
  },
  {
    title: "Wywiad",
    link: "https://www.youtube.com/watch?v=d2_YdHqEX3Q",
  },
  {
    title: "Rejestr",
    link: "https://www.cr-pzszach.pl/ew/viewpage.php?page_id=2&zwiazek=MA&klub_pers_id=813&pers_id=36573",
  },
];

const smoothScrollTo = (link) => {
  document.querySelector(link).scrollIntoView({
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <>
      <div className="bg-black/95 text-white">
        <section className="container py-10">
          <div className="grid md:grid-cols-3 py-5">
            {/* company details */}
            <div className="py-8 px-4">
              <h2 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Znani Radomianie
              </h2>
              <p className="text-sm">
                Marek Niedźwiecki jest sędzią szachowym o statusie klasy
                centralnej oraz instruktorem szachowym. Zainicjował i
                przeprowadził wiele prestiżowych turniejów szachowych. Pełni
                funkcję koordynatora programu ogólnokrajowej nauki gry w szachy
                oraz jest założycielem "Akademii Szachowej Marka
                Niedźwieckiego". Jest autorem cenionych podręczników szachowych,
                takich jak „Twój pierwszy ruch” oraz „Odkrywaj szachy”.
              </p>
              <br />
              {/* Social Handle */}
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://www.facebook.com/marek.niedzwiecki.7528"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMeta className="text-2xl hover:text-primary duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/uksroszada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/KKSzachowej/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GiTrophyCup className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div className="">
                <div className="py-8 px-4 ">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Linki
                  </h2>
                  <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map(({ id, title, link }, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          // smooth="false"
                          duration={500}
                          // onClick={() => smoothScrollTo(link)}
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4 ">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    UKS Roszada
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {HelpLinks.map((link, index) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <Link
                          to={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{link.title}</span>
                          <img src={link.img} className="w-[30px]" alt="..." />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4 ">
                  <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Zasoby
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {ResourcesLinks.map(({ id, title, link }, index) => (
                      <li
                        key={index}
                        // smooth="false"
                        duration={500}
                        // onClick={() => smoothScrollTo(link)}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;

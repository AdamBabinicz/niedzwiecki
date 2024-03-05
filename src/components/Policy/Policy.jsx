import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Policy = () => {
  return (
    <>
      <div className="container mx-auto mt-10 min-h-screen dark:bg-slate-800 dark:text-white pb-10">
        <h2 className="text-3xl font-semibold pt-10 mb-5">
          Polityka prywatności
        </h2>
        <p className="mb-5">
          "Polityka prywatności opisuje sposób, w jaki gromadzone, przetwarzane
          i przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
          usług drogą elektroniczną za pośrednictwem serwisu internetowego
          [adres strony] (zwany dalej Serwisem).
        </p>
        <p className="mb-5">
          Serwis gromadzi wyłącznie te dane osobowe, które są niezbędne do
          świadczenia i rozwijania oferowanych w nim usług.
        </p>
        <p className="mb-5">
          Dane osobowe, zbierane przez Serwis, są przetwarzane zgodnie z
          Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
          27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
          przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
          takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
          o ochronie danych, zwane dalej RODO) oraz ustawą o ochronie danych
          osobowych z dnia 10 maja 2018 r."
        </p>
        <p className="mb-5">
          Osobą odpowiedzialną za przetwarzanie danych osobowych zebranych
          poprzez Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
          fizycznej], z siedzibą pod adresem: [adres siedziby/zamieszkania],
          zarejestrowanym w Krajowym Rejestrze Sądowym pod numerem [numer KRS],
          posiadający NIP: [numer NIP] oraz REGON: [numer REGON]. Możesz
          skontaktować się z Administratorem za pośrednictwem adresu poczty
          elektronicznej: [adres e-mail] (zwany dalej „Administrator”)."
        </p>
        <p className="mb-5">
          Dane osobowe są wykorzystywane w następujących celach:
          <p>Rejestracja konta i weryfikacja tożsamości Użytkownika,</p>
          <p>Umożliwienie logowania do Serwisu,</p>
          <p>Realizacja umowy dotyczącej usług i e-usług,</p>
          <p>
            Komunikacja z Użytkownikiem (np. za pośrednictwem czatu na żywo,
            formularza kontaktowego),
          </p>
          <p>
            Wysyłka newslettera (po wyrażeniu zgody Użytkownika na jego
            otrzymywanie),
          </p>
          <p>
            Prowadzenie systemu komentarzy, Świadczenie usług społecznościowych,
          </p>
          <p>
            Promocja oferty Administratora, Marketing, remarketing, afiliacja,
          </p>
          <p>
            Personalizacja Serwisu dla Użytkowników, Działania analityczne i
            statystyczne,
          </p>
          <p>Windykacja należności,</p>
          <p>Ustalenie i dochodzenie roszczeń lub obrona przed nimi.</p>
        </p>
        <p classname="mb-5">
          Podanie danych jest dobrowolne, jednakże jest niezbędne do zawarcia
          umowy lub skorzystania z innych funkcjonalności Serwisu."
        </p>
        <Link
          to="/"
          className="flex items-center text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-300 mt-5"
        >
          <FaLongArrowAltLeft className="mr-1" />
          Powrót do strony głównej
        </Link>
      </div>
    </>
  );
};

export default Policy;

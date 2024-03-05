import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Img1 from "../assets/1.webp";
import Img2 from "../assets/27.webp";
import Img3 from "../assets/8.webp";
import Img4 from "../assets/31.webp";
import Img5 from "../assets/30.webp";
import Img6 from "../assets/29.webp";
import Img7 from "../assets/28.webp";
import Img8 from "../assets/9.webp";
import Img9 from "../assets/12.webp";
import Img10 from "../assets/13.webp";
import Img11 from "../assets/14.webp";
import Img12 from "../assets/17.webp";
import Img13 from "../assets/18.webp";
import Img14 from "../assets/19.webp";
import Img15 from "../assets/20.webp";
import Img16 from "../assets/21.webp";
import Img17 from "../assets/22.webp";
import Img18 from "../assets/23.webp";
import Img19 from "../assets/24.webp";
import Img20 from "../assets/25.webp";
import GalleryPopup from "../GalleryPopup/GalleryPopup";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title:
      "Prezes Uczniowskiego Klubu Sportowego, Roszada Radom w rozmowie z Oskarem Klichem",
    description:
      "„Tak, otrzymuję wiele telefonów z różnych powodów, ponieważ UKS 'Roszada' ma swoją stronę internetową, adres e-mail oraz mój prywatny numer telefonu, który jest dostępny w tych samych miejscach. Dlatego też różne osoby kontaktują się ze mną. Czasami pytają również na Messengerze, gdzie i w jaki sposób mogą nauczyć się grać w szachy. W takich sytuacjach informuję ich, że jako trener sportowy prowadzę zajęcia w Radomskim Klubie Sportowym Głuchych, mieszczącym się przy ulicy Mazowieckiego 13A, w środy o godzinie 17:30. Zapraszam tam wszystkie zainteresowane osoby.”",
    author: "red. Artur Klich",
    date: "02.28.2024",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "VII Memoriał Szachowy im. Jana Niedźwieckiego",
    description:
      "„Najważniejszą strategią jest organizacja turniejów szachowych z atrakcyjnymi nagrodami. Wcześniej prowadziłem turnieje, gdzie używane były tradycyjne bierki i szachownice, jednak teraz skupiam się na organizacji turniejów online na platformie lichess.org. Tam stworzyłem Klub Akademia Szachowa Marka Niedźwieckiego, gdzie publikuję informacje o planowanych turniejach. W najbliższym czasie, dokładnie w czwartek o godzinie 18:00, odbędzie się kolejny turniej szachowy poświęcony Pamięci Żołnierzy Wyklętych.”",
    author: "Uczestnicy turnieju",
    date: "04.12.2019",
    aosDelay: "300",
  },
  {
    id: 3,
    image: Img3,
    title: "Bractwo Kurkowe św. Sebastiana",
    description:
      "„Do obowiązków Króla Kurkowego należy reprezentowanie Bractwa na zewnątrz, udział w różnych zawodach strzeleckich innych bractw i udział w posiedzeniach zarządu Bractwa z głosem doradczym. Jego nazwisko zostanie wygrawerowane na łańcuchu, na którym jest zawieszony kur. Łańcuch z kurem nosi na szyi Król Kurkowy.”",
    author: "Król Kurkowy",
    date: "27.08.2017",
    aosDelay: "500",
  },
];

const allImages = [
  // Img1,
  // Img2,
  // Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
]; // Dodaj wszystkie zdjęcia do jednej tablicy

const BlogsComp = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Stan do kontrolowania widoczności pop-upa

  const handleShowPopup = () => {
    setIsPopupVisible(true); // Ustaw stan widoczności pop-upa na true po kliknięciu przycisku
  };

  return (
    <>
      <span id="w-obiektywie"></span>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <div data-aos="fade-up" className="container">
          <h2 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            W obiektywie
          </h2>
          {/* Blogs card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center"
          >
            <button className="btn-primary" onClick={handleShowPopup}>
              Zobacz pozostałe zdjęcia
            </button>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <GalleryPopup
          images={allImages}
          onClose={() => setIsPopupVisible(false)}
        />
      )}
      {/* Renderuj komponent Popup tylko gdy isPopupVisible jest ustawione na true */}
    </>
  );
};

export default BlogsComp;

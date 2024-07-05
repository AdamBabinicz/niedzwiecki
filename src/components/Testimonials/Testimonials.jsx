import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Z wywiadu z Oskarem Klichem",
    text: "Zacząłem grać w szachy mając dziewięć lat, a pierwszych kroków w tej grze nauczył mnie mój ojciec. To były czasy mojej szkoły podstawowej, a w moim rodzinnym mieście, Ciechanowie, nie było żadnych klubów sportowych ani sekcji, gdzie można byłoby doskonalić swoje umiejętności. W klasie miałem kolegę, który również pasjonował się szachami. Okazało się, że jego wujek był trenerem i miał drugi stopień kategorii szachowej. W trakcie naszych początkowych zajęć, kolega zastosował ruch znany jako 'Mat szewski' - podstawowy sposób wygrywania. Później nauczył mnie, jak obronić się przed tym manewrem - wtedy to on zaczął przegrywać partie. Tak więc, na przemian wygrywaliśmy - raz ja, raz on. Ten kolega był moim stałym partnerem przez większość szkoły podstawowej. W gimnazjum także graliśmy, ale moi koledzy bardziej interesowali się brydżem niż szachami.",
    img: "/images/3.webp",
  },
  {
    id: 2,
    name: "Ciąg dalszy ...",
    text: "Dwóch młodszych kolegów, Jacek Kutkiewicz i Paweł Gorgoń, uczęszczało do gimnazjum numer 13. To właśnie oni zainicjowali naszą przygodę z klubem szachowym. Kiedy organizowałem warsztaty szachowe, spotykały się różne osoby, jednak zainteresowanie było ograniczone. Pewnego dnia ci dwaj chłopcy przyszli z koleżanką i zaproponowali założenie klubu szachowego. Powiedziałem im, że potrzebne jest co najmniej 15 dorosłych osób, statut klubu, wybór zarządu i komisji rewizyjnej. Oni jednak uparli się, że porozmawiają z rodzicami i zaczęli działać. To była ich inicjatywa. Wcześniej byłem założycielem Klubu Szachowego 'Strzelec', który funkcjonował przez pewien czas, dzięki wsparciu finansowemu sponsora, Daniela Sokoła. Dzięki niemu mogliśmy wynająć pomieszczenie przy ul. Traugutta. Niestety, gdy skończyły się środki finansowe, musieliśmy opuścić lokal i zakończyć działalność klubu.",
    img: "/images/4.webp",
  },
  {
    id: 3,
    name: "Ciąg dalszy ...",
    text: "W tegorocznym planie mamy zamiar zgłosić nasz klub do Polskiego Związku Szachowego. W następnym roku zamierzamy uczestniczyć w Drużynowych Mistrzostwach Województwa Mazowieckiego, gdzie drużyna będzie składać się z pięciu osób, z koniecznością obecności co najmniej jednej kobiety. Dotychczas graliśmy w niższej lidze, gdzie takie wymaganie nie było obligatoryjne. Jednakże, w przypadku tych Mistrzostw Drużynowych, uczestnicy reprezentujący niższe kategorie nie mogą zdobyć punktów kategorii centralnych. Z tego powodu przez wiele lat poszukiwaliśmy kobiety, która byłaby zainteresowana dołączeniem do naszej drużyny. W tym roku dołączyła do nas studentka medycyny z Lubelszczyzny, która posiada doskonałe umiejętności w grze szachowej.",
    img: "/images/6.webp",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <span id="migawki"></span>
      <div className="py-10 dark:text-white">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }, index) => {
                return (
                  <div key={index} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt="..."
                        className="block mx-auto h-[50%] w-full sm:w-[50%] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[4.5rem] sm:text-[9rem] font-serif absolute bottom-4 right-0 dark:text-white">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

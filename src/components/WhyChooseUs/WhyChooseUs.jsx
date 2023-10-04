import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Deneyim",
      description: "Yılların deneyimi ile, projelerinizi profesyonelce yönetiyoruz.",
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Yaratıcılık",
      description: "Her projeye benzersiz bir yaklaşım getiriyoruz ve sınırları zorlamayı seviyoruz.",
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: <>İşbirliği</>,
      description: "Sizinle işbirliği yaparak, ihtiyaçlarınıza uygun özel çözümler sunuyoruz.",
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Sonuç Odaklılık",
      description: "Projelerinizi zamanında ve bütçeye uygun bir şekilde teslim etmek için çalışıyoruz.",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Güncel Teknoloji Bilgisi",
      description: "Ekibimiz, son teknolojilere hakimdir ve projelerinizi en son teknolojileri kullanarak geliştirir.",
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: <>Mükemmel Müşteri Desteği</>,
      description: "Müşteri memnuniyeti bizim için önceliklidir. Sorularınıza ve ihtiyaçlarınıza hızlı ve etkili bir şekilde yanıt veriyoruz.",
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Şeffaflık ve Güvenilirlik",
      description: "Müşterilerimize karşı taahhütlerimize sadık kalırız ve her zaman dürüst ve adil bir yaklaşım benimseriz.",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title"><h2>Neden Bizi Seçmelisiniz</h2> </span>
              
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;

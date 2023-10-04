import React from "react";
import img01 from "../../assets/img/images/about_img01.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              <img src={img02} alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-8 paragf">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">
                  <h2>Biz Kimiz</h2>
                </span>
              </div>
              <span className="span-one">
                <span>Merhaba!</span> <br /> <br />
                Biz, webin gücünü kullanarak hayalleri gerçeğe
                dönüştürme konusundaki tutkumuzla yanıp tutuşan bir ekip olarak
                buradayız. Profesyonel ve yaratıcı yazılım geliştiricileri
                olarak, dijital dünyada etkileyici izler bırakma amacıyla yola
                çıktık.</span> <br /><br />
                <span className="span-two">
                Vizyonumuz, web sitesi tasarımı ve geliştirmesini daha
                erişilebilir ve anlaşılır hale getirmek. Her işletme, her birey,
                her fikir için özel olarak tasarlanmış web siteleri ile dijital
                varlığınızı güçlendirmenize yardımcı olmak istiyoruz.
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

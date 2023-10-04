import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";

const Banner = () => {
  return (
    <section className="banner-area banner-main banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center fade-in justify-content-center align-items-center">

              <h2 className="title h2-animation">fludev</h2>
              <p className="h5">
                 Web siteniz sizin
                hikayenizin bir parçasıdır ve her hikaye özeldir. <br />
                Bize web sitenizin nasıl olması gerektiği konusunda hayalinizi anlatın ve
                gerisini bize bırakın. <br />
                Siz hayal edin, biz gerçekleştirelim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

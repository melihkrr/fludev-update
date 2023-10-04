import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import TeamOne from "../../components/Team/TeamOne";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        <WhoWeAre />  
        <WhyChooseUs />
        <div className="area-bg">
          
         
        </div>

        <TeamOne />
        <ContactOne />
      </main>
    </LayoutOne>
  );
};

export default Home;

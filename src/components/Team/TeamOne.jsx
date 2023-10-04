import React from "react";
import img01 from "../../assets/img/team/team_img01.png";
import img02 from "../../assets/img/team/team_img02.png";
import img03 from "../../assets/img/team/team_img03.png";
import img04 from "../../assets/img/team/team_img04.png";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: img01,
      name: "Çağatay Kayakıran",
      designation: "Founder & CO",
    },
    {
      src: img02,
      name: "Melih Kır",
      designation: "Head of Design",
    },
    {
      src: img03,
      name: "Remzi Kılınç",
      designation: "Vp People",
    },
    {
      src: img04,
      name: "Savaş Karal",
      designation: "Product Manager",
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title"><h2>Ekibimiz</h2></span>
              
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;

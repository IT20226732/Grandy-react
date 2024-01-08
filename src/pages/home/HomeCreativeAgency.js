import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-three-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-three-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
// import dataBlog from "../../data/Blog/blog-two-data.json";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import CreativeSlider from "../../components/Slider/CreativeSlider";
import FooterThree from "../../components/Footer/FooterOne";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import PortfolioThree from "../../components/Portfolio/PortfolioMasonryThreeSpace";
import CounterTwo from "../../components/Counter/CounterTwo";
import TeamMembersFour from "../../elements/TeamMembers/TeamMembersFour";
import ParallaxOne from "../../components/Parallax/ParallaxOne";
// import BlogTwo from "../../components/Blog/BlogTwo";
import Loader from "../../components/Loader/Loader";

const HomeCreativeAgency = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} menuAlign="center" />
    <CreativeSlider />
    <WhoWeAreThree
      data={dataServices}
      title="A Leading Company in the Lighting Industry"
      tagline="Brand, design and digital expertise"
    >
      <p>
        AWS Trading (PVT) Ltd is a leading lighting company specializing in
        importing and exporting a wide range of lighting products. With a focus
        on retail and wholesale, they deliver high-quality solutions and
        exceptional customer service. Their dedicated team ensures competitive
        prices and client satisfaction.
      </p>
    </WhoWeAreThree>
    <PortfolioThree data={dataPortfolio} title="Our Works" backfont="Works" />
    <CounterTwo data={dataCounter} />
    <TeamMembersFour data={dataTeam} title="Team" />
    <ParallaxOne title="Your One-Stop Shop for High-Quality Lighting Solutions!" />
    {/* <BlogTwo
      data={dataBlog}
      title="Our Blogs"
      tagline="Latest News"
      backfont="Blogs"
    /> */}
    <FooterThree />
  </Loader>
);

export default HomeCreativeAgency;

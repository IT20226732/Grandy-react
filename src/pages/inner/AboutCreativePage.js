import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataFeatures from "../../data/Feature/feature-one-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
// import dataClients from "../../data/Client/client-one-data.json";
import dataTestimonial from "../../data/Testimonials/testimonials-one-data.json";
// Images
import imgBg from "../../assets/images/slides/aboutus.jpg";
import imgAbout from "../../assets/images/about.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreNine from "../../components/WhoWeAre/WhoWeAreNine";
import AboutUsFive from "../../components/About/AboutUsFive";
import CounterTwo from "../../components/Counter/CounterTwo";
import TeamMembersFour from "../../elements/TeamMembers/TeamMembersFour";
// import ClientTwo from "../../components/Client/ClientTwo";
import TestimonialTwo from "../../components/Testimonial/TestimonialTwo";
import Loader from "../../components/Loader/Loader";

const AboutCreativePage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo
      title="ABOUT US "
      image={imgBg}
    />
    <WhoWeAreNine
      title="Who We Are"
      backfont="About"
      text="Welcome to AWS Trading (PVT) Ltd - Your One-Stop Shop for High-Quality Lighting Solutions!"
    />
    <AboutUsFive image={imgAbout} data={dataFeatures} />
    <CounterTwo data={dataCounter} />
    <TeamMembersFour data={dataTeam} title="Team" />
    {/* <ClientTwo data={dataClients} /> */}
    <TestimonialTwo data={dataTestimonial} />
    <FooterOne />
  </Loader>
);

export default AboutCreativePage;

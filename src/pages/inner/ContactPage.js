import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/contactus.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import MapSection from "../../components/Map/MapSection";
// import ContactEight from "../../components/Contact/ContactTwo";
import ContactInfoOne from "../../components/Contact/ContactInfoOne";
import ContactFormFour from "../../elements/ContactForm/ContactFormFour";
import Loader from "../../components/Loader/Loader";

const ContactPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo
      title="Contact Us"
      tagline="Feel free to call us"
      image={imgBg}
    />
    <ContactInfoOne />
    <MapSection />
    <ContactFormFour title="Contact Form" />
    <FooterOne />
  </Loader>
);

export default ContactPage;

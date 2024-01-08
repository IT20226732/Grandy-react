import React from 'react';
// DATA Files
import dataNavbar from '../../data/Navbar/nav-main-data.json';
import dataAccordion from '../../data/Accordions/accordions-data.json';
// Images
import imgBg from '../../assets/images/slides/privacy.jpg';
// Components
import NavbarSocial from '../../components/Navbar/NavbarSocial';
import PageTitleTwo from '../../components/PageTitle/PageTitleTwo';
import FooterOne from '../../components/Footer/FooterOne';
import AccordionLight from '../../components/Accordion/AccordionLight';
// import MapSection from "../../components/Map/MapSection";
// import ContactEight from "../../components/Contact/ContactEight";
// import ContactInfoOne from "../../components/Contact/ContactInfoOne";
import Loader from '../../components/Loader/Loader';

const PrivacyPolicie = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo title="Privacy Policy" image={imgBg} />
    <AccordionLight data={dataAccordion} />
    <FooterOne />
  </Loader>
);

export default PrivacyPolicie;

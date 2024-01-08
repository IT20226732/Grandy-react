import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/terms.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
// import MapSection from "../../components/Map/MapSection";
// import ContactEight from "../../components/Contact/ContactEight";
// import ContactInfoOne from "../../components/Contact/ContactInfoOne";
import Loader from "../../components/Loader/Loader";

const TermsCondition = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo title="Terms & Conditions" tagline="" image={imgBg} />

    <section
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
      }}
    >
      <div
        style={{
          width: "100%",
          border: "2px solid gray",
          padding: "20px",
        }}
      >
        <p
          style={{
            textIndent: "50px",
            textAlign: "justify",
            letterSpacing: "3px",
          }}
        >
          <h3
            style={{ display: "flex", textAlign: "left", paddingLeft: "-5px" }}
          >
            Agreement Acceptance
          </h3>
          By making a purchase or engaging in any transaction with AWS Trading
          Pvt Ltd (referred to as "we," "our," or "the shop"), you (referred to
          as "customer" or "you") agree to be bound by these Terms and
          Conditions. It is your responsibility to carefully read and fully
          understand all the terms outlined here in before proceeding with any
          transaction.
          <br />
          <br />
          <h3
            style={{ display: "flex", textAlign: "left", paddingLeft: "-5px" }}
          >
            Product Information and Accuracy
          </h3>
          We strive to provide accurate and reliable information about our
          lighting products. However, we do not warrant the completeness or
          accuracy of product descriptions, images, or specifications. Customers
          are advised to verify product suitability and compatibility with their
          requirements before making a purchase. By placing an order or making a
          purchase from AWS Trading Pvt Ltd, you acknowledge that you have read,
          understood, and agree to comply with these Terms and Conditions. Any
          violation of these terms may result in the cancellation of orders or
          refusal of service at our discretion. For any questions or
          clarifications regarding these Terms and Conditions, please contact
          us.
        </p>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default TermsCondition;

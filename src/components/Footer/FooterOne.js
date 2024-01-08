import React from "react";
import img from "../../assets/images/aws-final.png";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href="index.html">
                    <img className="logo logo-display" src={img} alt="" />
                  </a>
                </div>
                <div className="widget-links">
                  <ul>
                    <li>488, Hapugaspitiya Road, Keerapane, Gampola</li>
                    <li>+94 81 235 3267</li>
                    <li>A W S Trading (PVT) Ltd.</li>
                    <li>www.awstrading.lk</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Links</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/"}>Home</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/about-creative"}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/contact"}>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Legal</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL + '/privacy-terms'}>Privacy Policies</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + '/terms-conditions'}>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="popular-tags">
                  <a href={process.env.PUBLIC_URL + "/shop4"}>Round-Lights</a>{" "}
                  <a href={process.env.PUBLIC_URL + "/shop5"}>Shaders</a>
                  <a href={process.env.PUBLIC_URL + "/shop8"}>Tubelight</a>{" "}
                  <a href={process.env.PUBLIC_URL + "/shop6"}>
                    Street & Track Lights
                  </a>
                  <a href={process.env.PUBLIC_URL + "/shop9"}>
                    Wall-Lamp-Lights
                  </a>{" "}
                  <a href={process.env.PUBLIC_URL + "/shop3"}>
                    Flood & Panel lights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <ul className="social-media">
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-facebook"
                  >
                    <span></span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-twitter"
                  >
                    <span></span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://wa.me/0777009331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ion-social-whatsapp"
                  >
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-12">
            <div className="copy-right text-right">
                © {new Date().getFullYear()} AWS - Trading. All rights reserved
                <p>
                  {' '}
                  Developed By{' '}
                  <span className="text-uppercase">
                    <strong>
                      <a href="mailto:invecttech@gmail.com">Invect Tech </a>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-height"></div>
  </>
);

export default FooterOne;

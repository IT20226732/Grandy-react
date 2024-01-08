import React from "react";

const ContactInfoOne = () => (
  <section className="p-0 white-bg">
    <div className="container-fluid">
      <div className="row row-flex">
        <div className="col-md-4">
          <div className="col-inner spacer light-br-r">
            <div className="text-center">
              <i className="icon-map-pin font-50px indigo-icon"></i>
              <h3>Office Address</h3>
              <p>
                488, Hapugaspitiya Road,
                <br />
                Keerapane, Gampola - 20500
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-inner spacer light-br-r">
            <div className="text-center">
              <i className="icon-envelope font-50px indigo-icon"></i>
              <h3>Email Us</h3>
              <a href="mailto:awstradingpvtltd@gmail.com">
                <p>awstradingpvtltd@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-inner spacer">
            <div className="text-center">
              <i className="icon-dial font-50px indigo-icon"></i>
              <h3>Call Us</h3>
              <p className="mb-0">(+94) 81 235 3267</p>
              <p>(+94) 77 700 9331</p>
              <p>(+94) 76 405 7577</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoOne;

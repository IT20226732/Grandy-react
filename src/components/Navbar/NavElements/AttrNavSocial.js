import React from "react";

const AttrNavSocial = () => (
  <div className="attr-nav">
    <ul className="social-media-dark social-top">
      <li>
        <a href={process.env.PUBLIC_URL} className="ion-social-facebook">
          <span></span>
        </a>
      </li>
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
);

export default AttrNavSocial;

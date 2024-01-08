import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataShop from "../../data/Shop/shop-ten-data.json";
// Images
import imgBg from "../../assets/images/slides/wallBg.jpg";
// Components
import NavbarCart from "../../components/Navbar/NavbarCart";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ShopPage = () => {
  // Split the dataShop array into two arrays
  const firstLineData = dataShop.slice(0, 5);
  const secondLineData = dataShop.slice(5, 34);
  const thirdLineData = dataShop.slice(34, 46);
  const fourthLineData = dataShop.slice(46, 52);

  return (
    <Loader>
      <NavbarCart data={dataNavbar} type="white" />
      <PageTitleTwo title="Out-Door-Wall-Lamps" image={imgBg} />
      <section>
        <div className="container">
          <div className="row">
            {/* Render the first line of images */}
            <div className="col-md-12">
              <h3 className="text-uppercase text-left">Wall-Lamp</h3>
            </div>

            {firstLineData.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="product">
                  <div className="product-wrap">
                    <img
                      src={require("../../assets/images/" + item.image)}
                      className="img-responsive"
                      alt={item.title}
                    />
                    <div className="badge-box">
                      {item.sale ? <span className="sale-box">Sale</span> : ""}
                    </div>
                    {/* <div className="product-caption">
                      <div className="product-description text-center">
                        <div className="product-description-wrap">
                          <ul className="product-btn-group">
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-ios-cart"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <div className="product-detail">
                      <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                        {/* <h4>
                          <a href={process.env.PUBLIC_URL}>{item.title}</a>
                        </h4> */}
                        {/* <div className="product-star-rating">
                          <div className="product-stars">
                            <div
                              className="product-stars-rating"
                              data-width={item.rating}
                            ></div>
                          </div>
                        </div> */}
                        <p>
                          {item.price + " "}
                          {/* {item.oldPrice && (
                            <span className="old-price">
                              {item.currency + item.oldPrice || ""}
                            </span>
                          )} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Render the second line of images */}
            <div className="col-md-12">
              <h3 className="text-uppercase text-left">Wall-lamps</h3>
            </div>
            {secondLineData.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="product">
                  <div className="product-wrap">
                    <img
                      src={require("../../assets/images/" + item.image)}
                      className="img-responsive"
                      alt={item.title}
                    />
                    <div className="badge-box">
                      {item.sale ? <span className="sale-box">Sale</span> : ""}
                    </div>
                    {/* <div className="product-caption">
                      <div className="product-description text-center">
                        <div className="product-description-wrap">
                          <ul className="product-btn-group">
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-ios-cart"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <div className="product-detail">
                      <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                        {/* <h4>
                          <a href={process.env.PUBLIC_URL}>{item.title}</a>
                        </h4> */}
                        {/* <div className="product-star-rating">
                          <div className="product-stars">
                            <div
                              className="product-stars-rating"
                              data-width={item.rating}
                            ></div>
                          </div>
                        </div> */}
                        <p>
                          {item.price + " "}
                          {/* {item.oldPrice && (
                            <span className="old-price">
                              {item.currency + item.oldPrice || ""}
                            </span>
                          )} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Render the second line of images */}
            <div className="col-md-12">
              <h3 className="text-uppercase text-left">Wall-Lamp-w-FULL-LED</h3>
            </div>
            {thirdLineData.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="product">
                  <div className="product-wrap">
                    <img
                      src={require("../../assets/images/" + item.image)}
                      className="img-responsive"
                      alt={item.title}
                    />
                    <div className="badge-box">
                      {item.sale ? <span className="sale-box">Sale</span> : ""}
                    </div>
                    {/* <div className="product-caption">
                      <div className="product-description text-center">
                        <div className="product-description-wrap">
                          <ul className="product-btn-group">
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-ios-cart"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <div className="product-detail">
                      <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                        {/* <h4>
                          <a href={process.env.PUBLIC_URL}>{item.title}</a>
                        </h4> */}
                        {/* <div className="product-star-rating">
                          <div className="product-stars">
                            <div
                              className="product-stars-rating"
                              data-width={item.rating}
                            ></div>
                          </div>
                        </div> */}
                        <p>
                          {item.price + " "}
                          {/* {item.oldPrice && (
                            <span className="old-price">
                              {item.currency + item.oldPrice || ""}
                            </span>
                          )} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Render the second line of images */}
            <div className="col-md-12">
              <h3 className="text-uppercase text-left">Wall-Lamp-w-LED</h3>
            </div>
            {fourthLineData.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="product">
                  <div className="product-wrap">
                    <img
                      src={require("../../assets/images/" + item.image)}
                      className="img-responsive"
                      alt={item.title}
                    />
                    <div className="badge-box">
                      {item.sale ? <span className="sale-box">Sale</span> : ""}
                    </div>
                    {/* <div className="product-caption">
                      <div className="product-description text-center">
                        <div className="product-description-wrap">
                          <ul className="product-btn-group">
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-ios-cart"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href={process.env.PUBLIC_URL}>
                                <i className="ion-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <div className="product-detail">
                      <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                        {/* <h4>
                          <a href={process.env.PUBLIC_URL}>{item.title}</a>
                        </h4> */}
                        {/* <div className="product-star-rating">
                          <div className="product-stars">
                            <div
                              className="product-stars-rating"
                              data-width={item.rating}
                            ></div>
                          </div>
                        </div> */}
                        <p>
                          {item.price + " "}
                          {/* {item.oldPrice && (
                            <span className="old-price">
                              {item.currency + item.oldPrice || ""}
                            </span>
                          )} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterOne />
    </Loader>
  );
};

export default ShopPage;

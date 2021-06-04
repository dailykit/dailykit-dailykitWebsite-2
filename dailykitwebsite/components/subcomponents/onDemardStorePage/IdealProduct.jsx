import React, { PureComponent } from "react";
export default class IdealProduct extends PureComponent {
  render() {
    return (
      <div>
        <h5
          style={{
            textAlign: "center",
            color: "#8ac03b",
            fontWeight: "600",
            marginTop: "10.5rem",
          }}
        >
          For Every Trend Out There
        </h5>
        <div
          style={{
            textAlign: "center",
            marginTop: "2.3rem",
            marginBottom: "1.2rem",
          }}
        >
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "3rem",
              fontFamily: "'Nunito', sans-serif",
              letterSpacing: "1.5px",
            }}
          >
            Ideal Product Presentations
          </h1>
        </div>

        {/* carousel */}

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              className="invisible"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/customizableProduct.gif"
                className="d-block w-30"
                alt="..."
              />
              <div
                className="carousel-caption d-none w-60 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Customer's Choice
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Customizable Products
                  </h1>
                </div>
                <h3>
                  Allow to customers to modify different components of a dish.
                </h3>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/customizableProduct.gif"
                className="d-block w-30"
                alt="..."
              />
              <div
                className="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "25rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Cross-Sell & Up-Sell
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Accompaniments
                  </h1>
                </div>
                <h3>
                  Recommend & Showcase Cross-Sell Products such as Beverages,
                  Desserts and More..
                </h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/customizableProduct.gif"
                className="d-block w-30"
                alt="..."
              />
              <div
                className="carousel-caption d-none w-50 d-md-block"
                style={{ textAlign: "left", marginLeft: "28rem" }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#8ac03b",
                    fontWeight: "600",
                    marginTop: "10.5rem",
                  }}
                >
                  Extra Product Presentations
                </h5>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "2.3rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "3.5rem",
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Flexible Combo Options{" "}
                  </h1>
                </div>
                <h3>Suited for "Build Your Own Meal" concepts</h3>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <a href="#scheduledemo">
          <button
            type="button"
            className="btn-style-thirteen green responsive-button"
          >
            Get Started Now
          </button>
        </a>
      </div>
    );
  }
}

{
  /* <img
src="https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/customizableProduct.gif"
 className="d-block w-30"
alt="..."
/> */
}

{
  /*  */
}

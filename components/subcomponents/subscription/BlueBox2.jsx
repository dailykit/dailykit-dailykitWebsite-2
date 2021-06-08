import React, { PureComponent } from "react";
import Image from "next/image";

export default class BlueBox2 extends PureComponent {
  render() {
    return (
      <div>
        <div
          style={{
            background: "#101B2A",
            color: "white",
            marginTop: "6rem",
          }}
        >
          <div style={{ color: "#111B2B" }}>.</div>
          <div className="nunito text-center blueboxHeading">
            {this.props.heading}
          </div>
          <div className="container bluebox2-container">
            <div className="row justify-content-evenly mb-4">
              <div className="col-md-3 col-xs-10 column3 justify-content-center">
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                  className="nunito"
                >
                  Create Custom Plans & Options
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Multiple Plans like Vegan or Seafood | Couple or family | 2 or
                  3 items. It's upto you.
                </p>
                <Image
                  alt="icon"
                  src="/assets/icons/edit.svg"
                  width="90px"
                  height="auto"
                  margin="2rem 40% 2rem 30%"
                  display="block important!"
                />
              </div>
              <div className="col-md-3 col-xs-10 column3 justify-content-center">
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                  }}
                  className="nunito"
                >
                  Set Weekly Start and Cutoff Time
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Select the number of days and the time
                </p>
                <Image
                  alt="icon"
                  src="/assets/icons/calendar-timer.svg"
                  width="90px"
                  height="auto"
                  style={{
                    display: "block",
                    margin: "2rem 40% 2rem 30%",
                  }}
                />
              </div>
              <div className="col-md-3 col-xs-10 column3 justify-content-center">
                {" "}
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                  }}
                  className="nunito"
                >
                  20px-Card Debit At Cut Off Time
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Saved Card is 20pxmatically debited and order is placed after
                  cutoff time
                </p>
                <Image
                  alt="icon"
                  src="/assets/icons/ccTimer.svg"
                  width="90px"
                  height="auto"
                  style={{
                    display: "block",
                    margin: "2rem 40% 2rem 30%",
                  }}
                />
              </div>

              <div className="row justify-content-evenly mt-4">
                <div className="col-md-3 col-xs-10 column3 justify-content-center">
                  {" "}
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    className="nunito"
                  >
                    Precision Zip-Code Based Geo-Fencing
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Configure Deliverable zipcodes for each subscription plan.
                  </p>
                  <Image
                    alt="icon"
                    src="/assets/icons/location.svg"
                    width="90px"
                    height="auto"
                    style={{
                      display: "block",
                      margin: "2rem 40% 1.5rem 30%",
                    }}
                  />
                </div>
                <div className="col-md-3 col-xs-10 column3 justify-content-center">
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    className="nunito"
                  >
                    Dynamic Delivery Price
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Offer Free Delivery or Configure price as per each zipcode.
                  </p>
                  <Image
                    width="120px"
                    height="auto"
                    alt="icon"
                    src="/assets/icons/dollarTruck.svg"
                    style={{
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>
                <div className="col-md-3 col-xs-10 column3 justify-content-center">
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    className="nunito"
                  >
                    Configure Delivery Days
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Control Selection of Delivery Week-Days as per zipcode and
                    subscription plan.
                  </p>
                  <Image
                    alt="icon"
                    src="/assets/icons/calendarTruck.svg"
                    width="90px"
                    height="auto"
                    style={{
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#111b2b",
              color: "white",
            }}
          >
            <div className="container bluebox2-container">
              <div className="row justify-content-evenly">
                <div className="col-md-5 col-xs-10 column3">
                  <Image
                    alt="icon"
                    width="20px"
                    height="20px"
                    src="/assets/icons/Margins.svg"
                    style={{ marginRight: "0.8rem", display: "inline" }}
                  />{" "}
                  <h5 style={{ display: "inline" }}>
                    Add Permanent Items to Plans
                  </h5>
                  <br />
                  <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                    Common & Most Sold Items could be added for each week
                  </p>
                </div>
                <div className="col-md-5 col-xs-10 column3">
                  <Image
                    width="20px"
                    height="20px"
                    alt="icon"
                    src="/assets/icons/Precise Configuration.svg"
                    style={{ display: "inline" }}
                  />{" "}
                  <h5 style={{ display: "inline" }}>
                    Add Items based on Each Week
                  </h5>
                  <br />
                  <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                    Easily Add Your Rotating Items and Weekly Specials.
                  </p>
                </div>
                <div className="row justify-content-evenly mt-4">
                  <div className="col-md-5 col-xs-10 column3">
                    <Image
                      width="20px"
                      height="20px"
                      alt="icon"
                      src="/assets/icons/Smart Insights.svg"
                      style={{
                        display: "inline",
                      }}
                    />{" "}
                    <h5 style={{ display: "inline" }}>
                      Bulk Actions for Ease of Use
                    </h5>
                    <br />
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "1.5rem",
                      }}
                    >
                      Accurately Add Menu Items into multiple plans at once with
                      ease.
                    </p>
                  </div>
                  <div className="col-md-5 col-xs-10 column3">
                    <Image
                      width="20px"
                      height="20px"
                      alt="icon"
                      src="/assets/icons/Discounts&Coupons.svg"
                      style={{
                        display: "inline",
                      }}
                    />
                    <h5 style={{ display: "inline" }}>
                      Premium Products with Add-on Price
                    </h5>
                    <br />
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "1.5rem",
                      }}
                    >
                      Configure selected products with an added price over plan
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

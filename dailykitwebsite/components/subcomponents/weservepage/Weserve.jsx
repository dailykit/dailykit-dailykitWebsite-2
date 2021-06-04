import React, { PureComponent } from "react";

export default class Weserve extends PureComponent {
  render() {
    return (
      <>
        {/* heading */}
        <h6
          style={{
            color: "#8ac03b",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          DailyKIT Does It All
        </h6>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: "3.5rem",
            fontFamily: "'Nunito', sans-serif",
            letterSpacing: "1.5px",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "4rem",
          }}
        >
          We Serve
        </h1>
        {/* image-box */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 col-xs-10">
              <div className="card card-responsive">
                <div className="card-body imagebox1">
                  <a className="btn btn-dark p-4 below-image-button">
                    Restaurants
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-10">
              <div className="card card-responsive">
                <div className="card-body imagebox2">
                  <a className="btn btn-dark p-4 below-image-button">
                    SuperMarkets
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-10">
              <div className="card card-responsive">
                <div className="card-body imagebox3">
                  <a className="btn btn-dark p-4 below-image-button">
                    Cloud Kitchens
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-10">
              <div className="card card-responsive">
                <div className="card-body imagebox4">
                  <a className="btn btn-dark p-4 below-image-button">
                    Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

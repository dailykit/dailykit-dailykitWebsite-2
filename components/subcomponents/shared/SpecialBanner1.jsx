import React, { PureComponent } from "react";
export default class SpecialBanner1 extends PureComponent {
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-md-6 col-xs-10 trend-responsive">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                <br />
                {this.props.subheading}
              </p>
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>

              <div className="justify-content-center mb-4">
                <a href={this.props.button1link}>
                  <button type="button" className="weserve_button1">
                    {this.props.button1text}
                  </button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href={this.props.button2link}>
                  <button type="button" className="weserve_button2">
                    {this.props.button2text}
                  </button>
                </a>
              </div>
            </div>
            {this.props.image ? (
              <div className="col-4 imagebox11"></div>
            ) : (
              <div className="col-md-6 col-xs-10">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={this.props.imageurl}
                        className="d-block w-80 specialbanner1image"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
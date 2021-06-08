import React, { PureComponent } from "react";

export default class PersonalizationDoneRight extends PureComponent {
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "8rem" }}>
          <div className="row justify-content-between">
            {this.props.leftImage && (
              <div className="col-md-5 col-xs-10">
                <img
                  src={this.props.leftImage}
                  className="d-block image-responsive-size"
                  alt="..."
                />
              </div>
            )}
            <div className="col-md-5 col-xs-10 trend-responsive">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "50px",
                  margin: "1rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                {this.props.heading}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                {this.props.para.map((para) => {
                  return (
                    <p style={{ display: "inline" }}>
                      {para}
                      <br />
                      <br />
                    </p>
                  );
                })}
                <button
                  type="button"
                  style={{ fontSize: "14px", width: "250px" }}
                  className="btn btn-success btn-lg p-3 pl-4 pr-4"
                >
                  {this.props.buttontext
                    ? this.props.buttontext
                    : "TELL ME MORE"}
                </button>
              </p>
            </div>
            {this.props.rightImage && (
              <div className="col-md-5 col-xs-10">
                <img
                  src={this.props.rightImage}
                  className="d-block image-responsive-size"
                  width="480px"
                  alt="..."
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

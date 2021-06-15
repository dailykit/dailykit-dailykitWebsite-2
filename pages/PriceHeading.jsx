import React, { PureComponent } from "react";

export default class PriceHeading extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-xs-12 text-center">
            <div class="sec-heading">
              <h2 class="sec-title-lg">{this.props.heading}</h2>
              <p class="sec-text-pad lead">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

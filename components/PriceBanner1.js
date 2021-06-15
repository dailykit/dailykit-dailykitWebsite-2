import React, { PureComponent } from "react";

export default class PriceBanner1 extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-5 text-center text-lg-left order-last order-lg-first">
            <div class="header-text-lg">
              <h1 class="sec-title-xl">Pricing plans</h1>
              <p class="lead">Chose the best plan that fits your requirments</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="header-img sec-img">
              <img
                src="assets/images/pricingheader.png"
                class="img-fluid"
                alt="header-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

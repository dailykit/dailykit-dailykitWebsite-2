import React, { PureComponent } from "react";

export default class PriceBanner extends PureComponent {
  render() {
    return (
      <div id="pricing-table" className="clear">
        <div className="plan">
          <h3>
            {this.props.planName}
            <span>{this.props.price}</span>
          </h3>
          <a className="signup" href="/">
            Select Plan
          </a>
          <ul>
            <h4>Online store</h4>
            {this.props.onlinestore.map((list) => {
              return (
                <li>
                  {" "}
                  {list}&nbsp; <b>✔</b>
                </li>
              );
            })}
          </ul>
          <ul>
            <h4>Features</h4>
            {/* {this.props.features.map((list) => {
              return (
                <li>
                  {" "}
                  {list.key}&nbsp; <b>✔</b>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    );
  }
}

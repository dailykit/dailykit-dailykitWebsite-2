import React, { PureComponent } from "react";

export default class PriceColumn extends PureComponent {
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
                <li key={list}>
                  {" "}
                  {list}&nbsp; <b>: Yes</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Features</h4>
            {this.props.features.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            {console.log(this.props.Delivery)}
            <h4>Delivery</h4>
            {this.props.delivery.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Order Management</h4>
            {this.props.orderManagement.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Global Selliing</h4>
            {this.props.globalSelling.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Customization</h4>
            {this.props.customization.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Editor App</h4>
            {this.props.editorApp.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Content App</h4>
            {this.props.contentApp.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Cart Management</h4>
            {this.props.cartManagement.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Insights</h4>
            {this.props.insights.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          {" "}
          <ul>
            <h4>Support</h4>
            {this.props.support.map((list) => {
              return <li key={list}> {list[0]}&nbsp;</li>;
            })}
          </ul>
        </div>{" "}
        <div className="plan">
          <ul>
            <h4>Payment Gateway Integration</h4>
            {this.props.paymentGatewayIntegration.map((list) => {
              return (
                <li key={list}>
                  {" "}
                  {list[0]}&nbsp; <b>: {list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

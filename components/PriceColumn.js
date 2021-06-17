import React, { PureComponent } from "react";
import ContactFormSection2 from "./subcomponents/shared/ContactFormSection2";
export default class PriceColumn extends PureComponent {
  render() {
    return (
      <div id="pricing-table" className="clear center">
        <div className="col-md-5 col-xs-10 plan">
          <h2>{this.props.planName}</h2>
          <span className="pricing-price">
            <sup>$</sup>
            {this.props.price}
          </span>
          <a
            href="/"
            className="btn btn-lg btn-price"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Get started
          </a>
          <ContactFormSection2
            dataAccount={this.props.dataAccount}
            dataForm={this.props.dataForm}
          />
          <ul>
            <h4>Online store</h4>
            {this.props.onlinestore.map((list) => {
              return (
                <li key={list}>
                  <b className="list-responsive">{list}</b>
                  <b className="list-responsive-value">Yes</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Features</h4>
            {this.props.features.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {/* {console.log(this.props.Delivery)} */}
            <h4>Delivery</h4>
            {this.props.delivery.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Order Management</h4>
            {this.props.orderManagement.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Global Selliing</h4>
            {this.props.globalSelling.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Customization</h4>
            {this.props.customization.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" ? (
                    <b className="list-responsive">{list[0]}</b>
                  ) : (
                    <b className="list-responsive">No</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Editor App</h4>
            {this.props.editorApp.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Content App</h4>
            {this.props.contentApp.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" ? (
                    <b className="list-responsive">{list[0]}</b>
                  ) : (
                    <b className="list-responsive">✖ {list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.cartManagement.map((list) => {
              return (
                <li key={list} style={{ borderTop: "none" }}>
                  <b className="list-responsive">Cart Management: {list[0]}</b>
                  <b className="list-responsive-value"> {list[0]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.insights.map((list) => {
              return (
                <li key={list} style={{ borderTop: "none" }}>
                  <b className="list-responsive">Insights: {list[0]}</b>
                  <b className="list-responsive-value"> {list[0]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            {this.props.support.map((list) => {
              return (
                <li key={list} style={{ borderTop: "none" }}>
                  <b className="list-responsive">Support: {list[0]}</b>
                  <b className="list-responsive-value"> {list[0]}</b>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="plan">
          <ul>
            <h4>Payment Gateway Integration</h4>
            {this.props.paymentGatewayIntegration.map((list) => {
              return (
                <li key={list}>
                  {list[1] !== "No" && (
                    <b className="list-responsive">{list[0]}</b>
                  )}
                  <b className="list-responsive-value">{list[1]}</b>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

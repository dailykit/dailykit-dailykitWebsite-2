import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceColumn from "../components/PriceColumn";
import PriceColumnLabel from "../components/PriceColumnLabel";
import PriceBanner1 from "../components/PriceBanner1";
import PriceHeading from "../components/PriceHeading";
export default class pricepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>We serve</title>
          <meta
            name="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
          />
          <meta
            property="og:title"
            content="Restaurants, Cloud Kitchens, Super Markets, Enterprise - One Stop Solution"
            key="ogtitle"
          />
          <meta property="og:url" content="https://dailykit.org/we_serve" />
          <meta
            property="og:description"
            content="Dailykit is a one stop shop for Restaurants, Cloud Kitchens, Franchisees, Super Markets, Food Startups or even Large Enterprises. Optimize Kitchen Workflows. Explore Multiple New Sales Channels. Never before seen scalability as Dailykit Scales as you Scale. "
            key="ogdesc"
          />
        </Head>

        <Navbar />
        <PriceBanner1 />
        <PriceHeading heading={"Best pricing"} />
        <div className="container">
          <div className="row ">
            <div className="col-md-3 col-xs-10">
              <PriceColumnLabel
                onlinestore={[
                  ["onDemandStore"],
                  ["Subscription Store"],
                  ["Auto Select Menu "],
                  ["Ecommerce"],
                  ["Meal Kit Specific Store capabilities"],
                  ["Upsell & Cross Sell"],
                  ["Build your own meal"],
                  ["SEO Optimization"],
                ]}
                features={[
                  ["Unlimited products"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                  ],
                  ["24/7 support"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "No",
                  ],
                  ["Manual order creation"],
                  ["Discount codes"],
                  ["SSL certificate"],
                  ["Abandoned cart recovery"],
                  ["Referral Programs"],
                  [" Wallet"],
                  ["Professional reports"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "Basic",
                  ],
                  ["Menu Engineeing"],
                  ["Weighing Scale Integration, KOT, Print Routing"],
                  ["Multi Locations Support"],
                  ["Recipe Management"],
                  ["Station Management"],
                  ["Standard Kitchen Operating Procedures"],
                  ["Meal Kit Management (New)"],
                  ["Campaign Management"],
                  ["Multi Brand / Ghost Kitchens"],
                ]}
                inventory={[
                  ["Supplier Management"],
                  ["Purchase Orders"],
                  ["Work Orders"],
                  ["Packaging Management"],
                ]}
                delivery={[
                  ["Print shipping labels"],
                  ["Postmastes Integration"],
                  ["3rd party delivery support"],
                  ["Order based delivery routing to delivery partners"],
                  ["3rd Party Food Aggregator Support"],
                  ["Live Delivery Tracking"],
                  ["Multiple Delivery Partner Integration"],
                  ["Auto Delivery"],
                ]}
                orderManagement={[
                  ["Real time order tracking"],
                  ["Reject an Order"],
                  ["Weighing Scale Integration, KOT, Print Routing"],
                  ["Station Management"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages"],
                  ["Multi Currency"],
                ]}
                customization={[["Support Custom Requests"]]}
                editorApp={[["Online Store Creation"], ["Multiple Themes"]]}
                contentApp={[
                  ["Page Management"],
                  ["Manage Subscription Store Content"],
                ]}
                cartManagement={[["No"]]}
                insights={[["No"]]}
                support={[["Basic"]]}
                paymentGatewayIntegration={[
                  ["Stripe"],
                  ["Custom"],
                  ["Transaction Fees"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              <PriceColumn
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Standard"
                price="29"
                onlinestore={[
                  ["onDemandStore", "Yes"],
                  ["Subscription Store", "$10/Month Addon"],
                  ["Auto Select Menu", "Applicable on Subscription AddOn"],
                  ["Ecommerce", "Yes"],
                  ["Meal Kit Specific Store capabilities", "Yes"],
                  ["Upsell & Cross Sell", "Yes"],
                  ["Build your own meal", "Yes"],
                  ["SEO Optimization", "Yes"],
                ]}
                features={[
                  ["Unlimited products", "Yes"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "2",
                  ],
                  ["24/7 support", "No"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "No",
                  ],
                  ["Manual order creation", "No"],
                  ["Discount codes", "Yes"],
                  ["SSL certificate", "Yes"],
                  ["Abandoned cart recovery", "Yes"],
                  ["Referral Programs", "Yes"],
                  [" Wallet", "Yes"],
                  ["Professional reports", "No"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "No",
                  ],
                  ["Menu Engineeing", "Basic"],
                  ["Weighing Scale Integration, KOT, Print Routing", "No"],
                  ["Multi Locations Support", "Yes"],
                  ["Recipe Management", "Yes"],
                  ["Station Management", "Yes"],
                  ["Standard Kitchen Operating Procedures", "No"],
                  ["Meal Kit Management (New)", "No"],
                  ["Campaign Management", "Basic Rules"],
                  ["Multi Brand / Ghost Kitchens", "Upto 2 Brands"],
                ]}
                inventory={[
                  ["Supplier Management", "Available at $49 Addon"],
                  ["Purchase Orders", "Available at $49 Addon"],
                  ["Work Orders", "Available at $49 Addon"],
                  ["Packaging Management", "Available at $49 Addon"],
                ]}
                delivery={[
                  ["Print shipping labels", "Yes"],
                  ["Postmastes Integration", "Yes"],
                  ["3rd party delivery support", "Yes"],
                  ["Order based delivery routing to delivery partners", "Yes"],
                  ["3rd Party Food Aggregator Support", "Yes"],
                  ["Live Delivery Tracking", "Yes"],
                  ["Multiple Delivery Partner Integration", "No"],
                  ["Auto Delivery", "No"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "Yes"],
                  ["Reject an Order", "Yes"],
                  ["Weighing Scale Integration, KOT, Print Routing", "No"],
                  ["Station Management", "Yes"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "Yes"],
                  ["Multi Currency", "No"],
                ]}
                customization={[["Support Custom Requests", "No"]]}
                editorApp={[
                  ["Online Store Creation", "Basic"],
                  ["Multiple Themes", "No"],
                ]}
                contentApp={[
                  ["Page Management", "No"],
                  ["Manage Subscription Store Content", "No"],
                ]}
                cartManagement={[["No"]]}
                insights={[["No"]]}
                support={[["Basic"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "Yes"],
                  ["Custom", "No"],
                  ["Transaction Fees", "2%"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              <PriceColumn
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Premium"
                price="79"
                onlinestore={[
                  ["onDemandStore", "Yes"],
                  ["Subscription Store", "Included"],
                  ["Auto Select Menu", "Included"],
                  ["Ecommerce", "Yes"],
                  ["Meal Kit Specific Store capabilities", "Yes"],
                  ["Upsell & Cross Sell", "Yes"],
                  ["Build your own meal", "Yes"],
                  ["SEO Optimization", "Yes"],
                ]}
                features={[
                  ["Unlimited products", "Yes"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "5",
                  ],
                  ["24/7 support", "Yes"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "Yes",
                  ],
                  ["Manual order creation", "Yes"],
                  ["Discount codes", "Yes"],
                  ["SSL certificate", "Yes"],
                  ["Abandoned cart recovery", "Yes"],
                  ["Referral Programs", "Yes"],
                  [" Wallet", "Yes"],
                  ["Professional reports", "Yes"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "No",
                  ],
                  ["Menu Engineeing", "Advanced"],
                  ["Weighing Scale Integration, KOT, Print Routing", "Yes"],
                  ["Multi Locations Support", "Yes"],
                  ["Recipe Management", "Yes"],
                  ["Station Management", "Yes"],
                  ["Standard Kitchen Operating Procedures", "Yes"],

                  ["Meal Kit Management (New)", "Yes"],
                  ["Campaign Management", "Advanced Rules"],
                  ["Multi Brand / Ghost Kitchens", "Upto 5 brands"],
                ]}
                inventory={[
                  ["Supplier Management", "Available at $49 Addon"],
                  ["Purchase Orders", "Available at $49 Addon"],
                  ["Work Orders", "Available at $49 Addon"],
                  ["Packaging Management", "Available at $49 Addon"],
                ]}
                delivery={[
                  ["Print shipping labels", "Yes"],
                  ["Postmastes Integration", "Yes"],
                  ["3rd party delivery support", "Yes"],
                  ["Order based delivery routing to delivery partners", "Yes"],
                  ["3rd Party Food Aggregator Support", "Yes"],
                  ["Live Delivery Tracking", "Yes"],
                  ["Multiple Delivery Partner Integration", "Yes"],
                  ["Auto Delivery", "No"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "Yes"],
                  ["Reject an Order", "Yes"],
                  ["Weighing Scale Integration, KOT, Print Routing", "Yes"],
                  ["Station Management", "Yes"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "Yes"],
                  ["Multi Currency", "No"],
                ]}
                customization={[["Support Custom Requests", "No"]]}
                editorApp={[
                  ["Online Store Creation", "Basic"],
                  ["Multiple Themes", "upto 5"],
                ]}
                contentApp={[
                  ["Page Management", "Yes"],
                  ["Manage Subscription Store Content", "Yes"],
                ]}
                cartManagement={[["Yes"]]}
                insights={[["Basic"]]}
                support={[["24/7"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "Yes"],
                  ["Custom", "No"],
                  ["Transaction Fees", "1.50%"],
                ]}
              />
            </div>
            <div className="col-md-3 col-xs-10">
              {" "}
              <PriceColumn
                dataAccount="3161173:g2o5g2c3i8"
                dataForm={"4175704:a4w7j9"}
                planName="Professional"
                price="449"
                onlinestore={[
                  ["onDemandStore", "Yes"],
                  ["Subscription Store", "Included"],
                  ["Auto Select Menu", "Included"],
                  ["Ecommerce", "Yes"],
                  ["Meal Kit Specific Store capabilities", "Yes"],
                  ["Upsell & Cross Sell", "Yes"],
                  ["Build your own meal", "Yes"],
                  ["SEO Optimization", "Yes"],
                ]}
                features={[
                  ["Unlimited products", "Yes"],
                  [
                    "Staff accounts: Staff members with access to the admin and POS.",
                    "Unlimited",
                  ],
                  ["24/7 support", "Yes"],
                  [
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products",
                    "Yes",
                  ],
                  ["Manual order creation", "Yes"],
                  ["Discount codes", "Yes"],
                  ["SSL certificate", "Yes"],
                  ["Abandoned cart recovery", "Yes"],
                  ["Referral Programs", "Yes"],
                  [" Wallet", "Yes"],
                  ["Professional reports", "Yes"],
                  [
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.",
                    "Yes",
                  ],
                  ["Menu Engineeing", "Complete Control"],
                  ["Weighing Scale Integration, KOT, Print Routing", "Yes"],
                  ["Multi Locations Support", "Yes"],
                  ["Recipe Management", "Yes"],
                  ["Station Management", "Yes"],
                  ["Standard Kitchen Operating Procedures", "Yes"],
                  ["Meal Kit Management (New)", "Yes"],
                  ["Campaign Management", "Advanced Rules"],
                  ["Multi Brand / Ghost Kitchens", "Unlimited"],
                ]}
                inventory={[
                  ["Supplier Management", "Included"],
                  ["Purchase Orders", "Included"],
                  ["Work Orders", "Included"],
                  ["Packaging Management", "Included"],
                ]}
                delivery={[
                  ["Print shipping labels", "Yes"],
                  ["Postmastes Integration", "Yes"],
                  ["3rd party delivery support", "Yes"],
                  ["Order based delivery routing to delivery partners", "Yes"],
                  ["3rd Party Food Aggregator Support", "Yes"],
                  ["Live Delivery Tracking", "Yes"],
                  ["Multiple Delivery Partner Integration", "Yes"],
                  ["Auto Delivery", "Yes"],
                ]}
                orderManagement={[
                  ["Real time order tracking", "Yes"],
                  ["Reject an Order", "Yes"],
                  ["Weighing Scale Integration, KOT, Print Routing", "Yes"],
                  ["Station Management", "Yes"],
                ]}
                globalSelling={[
                  ["Sell in multiple languages", "Yes"],
                  ["Multi Currency", "Yes"],
                ]}
                customization={[["Support Custom Requests", "Yes"]]}
                editorApp={[
                  ["Online Store Creation", "Advanced"],
                  ["Multiple Themes", "Multiple"],
                ]}
                contentApp={[
                  ["Page Management", "Yes"],
                  ["Manage Subscription Store Content", "Yes"],
                ]}
                cartManagement={[["Yes"]]}
                insights={[["Advanced"]]}
                support={[["24/7"]]}
                paymentGatewayIntegration={[
                  ["Stripe", "Yes"],
                  ["Custom", "Yes"],
                  ["Transaction Fees", "1%"],
                ]}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

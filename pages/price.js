import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceBanner from "../components/PriceBanner";
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
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-10">
              {" "}
              <PriceBanner
                planName="Standard"
                price="$100"
                onlinestore={[
                  "onDemandStore",
                  "Subscription Store",
                  "Ecommerce",
                  "Meal Kit Specific Store capabilities",
                  "Upsell & Cross Sell",
                  "Build your own meal",
                  "SEO Optimization",
                ]}
                features={[
                  {
                    "Unlimited products": "yes",
                    "Staff accounts: Staff members with access to the admin and POS.":
                      "yes",
                    "24/7 support": "no",
                    "Locations:Assign inventory to stores, warehouses,pop-ups, or wherever you store products":
                      "no",
                    "Manual order creation": "no",
                    "Discount codes": "yes",
                    "SSL certificate": "yes",
                    "Abandoned cart recovery": "yes",
                    "Referral Programs": "yes",
                    " Wallet": "no",
                    "Professional reports": "no",
                    "Third-party calculated shipping rates: Show calculated rates with your own account or third-party apps at checkout.":
                      "Basic",
                    "Menu Engineeing": "no",
                    "Weighing Scale Integration, KOT, Print Routing": "yes",
                    "Multi Locations Support": "yes",
                    "Recipe Management": "yes",
                    "Station Management": "yes",
                    "Standard Kitchen Operating Procedures": "no",
                  },
                ]}
              />
            </div>
            <div class="col-md-4 col-xs-10">
              <PriceBanner
                planName="Premium"
                price="$150"
                onlinestore={[
                  "onDemandStore",
                  "Subscription Store",
                  "Ecommerce",
                  "Meal Kit Specific Store capabilities",
                  "Upsell & Cross Sell",
                  "Build your own meal",
                  "SEO Optimization",
                ]}
              />
            </div>
            <div class="col-md-4 col-xs-10">
              {" "}
              <PriceBanner
                planName="Professional"
                price="$500"
                onlinestore={[
                  "onDemandStore",
                  "Subscription Store",
                  "Ecommerce",
                  "Meal Kit Specific Store capabilities",
                  "Upsell & Cross Sell",
                  "Build your own meal",
                  "SEO Optimization",
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

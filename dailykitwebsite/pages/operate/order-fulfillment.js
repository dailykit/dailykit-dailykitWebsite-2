import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EndToEndFoodBusiness from "../../components/subcomponents/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import BannerSection7 from "../../components/subcomponents/shared/BannerSection7";
import BannerSection8 from "../../components/subcomponents/shared/BannerSection8";
import SpecialBanner1 from "../../components/subcomponents/shared/SpecialBanner1";
import ImageBox1 from "../../components/subcomponents/shared/ImageBox1";
import SpecialBanner2 from "../../components/subcomponents/orderpage/SpecialBanner2";
import SpecialBanner3 from "../../components/subcomponents/orderpage/SpecialBanner3";
export default class Orderfulfillmentpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Operate: Order Fulfillment</title>
          {/* <!-- CSS only --> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
          />
          {/* <!-- JavaScript Bundle with Popper --> */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossOrigin="anonymous"
            defer
          ></script>
          {/* <!-- MailerLite Universal --> */}
          {/* <script>
      (function (m, a, i, l, e, r) {
        m["MailerLiteObject"] = e;
        function f() {
          var c = { a: arguments, q: [] };
          var r = this.push(c);
          return "number" != typeof r ? r : f.bind(c.q);
        }
        f.q = f.q || [];
        m[e] = m[e] || f.bind(f.q);
        m[e].q = m[e].q || f.q;
        r = a.createElement(i);
        var _ = a.getElementsByTagName(i)[0];
        r.async = 1;
        r.src = l + "?v" + ~~(new Date().getTime() / 1000000);
        _.parentNode.insertBefore(r, _);
      })(
        window,
        document,
        "script",
        "https://static.mailerlite.com/js/universal.js",
        "ml"
      );
      var ml_account = ml("accounts", "3161173", "g2o5g2c3i8", "load");
    </script> */}
          {/* <!-- End MailerLite Universal --> */}
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo:wght@100;400;700;900&family=Nunito:wght@400;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <meta
            name="Dailykit"
            content="The Only Trend-Responsive Food-Tech Solution You'll Ever Need"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <SpecialBanner1
          heading={"Set Your Own Delivery Terms"}
          subheading={"Flexible Order Fulfillment"}
          imageurl={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/order-fulfilment-hero@2x.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />
        <ImageBox1
          Heading1text={"What Do You Need? Pick-Up? Delivery? Both?"}
          SubHeading2text={"Order Fulfillment"}
          imagepara={[
            {
              heading: "PICK-UP",
              para: "Set Pickup Time Range Daily, Weekly, Monthly, etc.Ensure Contactless Pickup",
            },
            {
              heading: "DELIVERY",
              para: "Opt for Self-Delivery or Partner with a 3rd-Party Set Multiple Delivery Choices Based on: Day, Delivery Range, Cost, etc..",
            },
          ]}
          image1url={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/pickup@2x.png"
          }
          image2url={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/delivery@2x.png"
          }
        />
        <SpecialBanner2
          SubHeading2text={"Delivery Integrations"}
          Heading1text={"Explore & Partner with Delivery Providers Around You."}
          lists={[
            {
              heading1: "Delivery Hub",
              heading2: "Explore Partners",
              para: "DailyKIT provides you the platform to find & connect with Delivery Partners, know their terms & conditions & partner with them with 100% transparency.",
            },
            {
              heading1: "Delivery Hub",
              heading2: "Setup & Assign Delivery Partners on Your Terms",
              para: "Assign Deliveries to your Partners based on: delivery day, radius, price, and time, then let DailyKIT take care of notifying them.",
            },
            {
              heading1: "Delivery Hub",
              heading2: "Settle Your Payments Post-Cycle with DailyKIT",
              para: "Settle your payments with your Delivery Partners at the end of each cycle, and Let us worry about the charge sheet & invoices.",
            },
          ]}
        />
        <SpecialBanner3
          SubHeading2text={"Order Tracking"}
          Heading1text={"Customer or Operator? Track Orders the Same Way!"}
          imageurl1={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/consumer@2x.png"
          }
          imageurl2={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/operator@2x-1.png"
          }
        />
        <BannerSection8
          heading={"Seamless Order Fulfillment"}
          subheading={""}
          image={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/ondemand-delivery.png"
          }
          para={[
            "We understand the nuances of pick-up & delivery. With DailyKIT easily configure precise mile ranges, order value limits, custom delivery charges, as well as days and times at which you deliver or pickup.",
            "Whether 3rd-Party or in-house, once configured, DailyKIT's rule-based & automatic pick-up and delivery assignment is a breeze.",
          ]}
        />

        <BannerSection8
          heading={"Schedule Weekly Shipments with Ease"}
          subheading={"Subscription Delivery"}
          rightImage={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-fulfilment/subscription-delivery.png"
          }
          para={[
            "Operate subscription deliveries from your fingertips. Select delivery days & zip codes, along with with custom delivery prices.DailyKIT takes care of your scheduled & recurring deliveries by assigning the right delivery partner beforehand, ensuring on-time delivery every time.",
          ]}
        />
        <BannerSection7
          heading={"Delivery and Pickup Insights"}
          list={[
            "Pickup Insights",
            "Self-Delivery Reports",
            "Delivery Partner Ananlytics",
          ]}
          image={["imagebox8", "imagebox9", "imagebox10"]}
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <EndToEndFoodBusiness
          subheading={"An End-To-End Food Business Software Solution Provider"}
          heading={"You've Never Managed Your Food Business Like This Before"}
          dataAccount={"3161173:g2o5g2c3i8"}
          dataForm={"4175542:d4z0s3"}
          points={[
            [
              "Recipe & Menu Engineering",
              "Manufacturing Technology",
              "Sales & Marketing Platform",
            ],
            [
              "Delivery & Packaging Integrations",
              "Inventory Management",
              "Analytics",
            ],
          ]}
        />
        <ScheduleMeetingSection1
          heading={"Schedule an E-Meeting"}
          image={
            "https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg"
          }
          id={"scheduledemo"}
          content={[
            {
              question: "How Do You Schedule A Meeting?",
              answer:
                "Select the date on the calendar, the time slot, and then simply fill in your information. Done!",
            },
            {
              question: "What Happens After You Schedule A Meeting?",
              answer:
                "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number",
            },
            {
              question: "What Happens During The Meeting?",
              answer:
                "We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.",
            },
          ]}
        />
        <Footer />
      </div>
    );
  }
}

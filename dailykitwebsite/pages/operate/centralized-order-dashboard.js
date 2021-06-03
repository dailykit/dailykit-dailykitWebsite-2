import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import EndToEndFoodBusiness from "../../components/subcomponents/shared/EndToEndFoodBusiness";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import BannerSection2 from "../../components/subcomponents/shared/BannerSection2";
import BannerSection7 from "../../components/subcomponents/shared/BannerSection7";
import BannerSection9 from "../../components/subcomponents/shared/BannerSection9";
import SpecialBanner1 from "../../components/subcomponents/shared/SpecialBanner1";
export default class Orderdashboardpage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Operate: Order Dashboard</title>
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
          heading={"Centralized Order Management"}
          subheading={"Make Your Life Easier"}
          image={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-dashboard/order-dashboard-hero2@2x.png"
          }
          button1text={"Get Started Now"}
          button2text={"Free Demo"}
          button1link={"#scheduledemo"}
          button2link={"#scheduledemo"}
        />

        <BannerSection2
          rightimageurl={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-dashboard/all-orders-2@2x.png"
          }
          heading={"One Dashboard For Every Product Line"}
          bluesubheading={"Easy & Intuitive"}
          description="Be it Meal Kits, Ready-To-Eat, Private-Label Artisanal Grocery or Any Other Trending Product Line, DailyKIT Offers One Comprehensive Dashboard to Manage Them All."
          descriptionpoints={[
            "Accept Orders from Everywhere e.g.On-Demand/Subscription Store, Multiple Ghost Brands/Third-Party Marketplaces",
            "Cloud-Based Access allowing you to manage orders from anywhere",
            "Apply Filters & Sorting using multiple parameters to help with Order Expediting",
          ]}
        />

        <BannerSection9
          image1={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-dashboard/DailyOS-Notifications@2x.png"
          }
          image2={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-dashboard/print-KOTs@2x.png"
          }
          image3={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/order-dashboard/Email-%26-SMS-Notifications@2x.png"
          }
        />

        <BannerSection7
          heading={"Daily Order Reporting & Analytics"}
          list={[
            "Order Fulfillment",
            "Daily Sales & Revenue",
            "Inventory Usage",
          ]}
          image={["imagebox5", "imagebox6", "imagebox7"]}
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

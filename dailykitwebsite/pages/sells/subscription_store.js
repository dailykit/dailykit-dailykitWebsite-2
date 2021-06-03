import React, { PureComponent } from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScheduleMeetingSection1 from "../../components/subcomponents/shared/ScheduleMeetingSection1";
import SpecialBanner5 from "../../components/subcomponents/onDemardStorePage/SpecialBanner5";
import BlueBox2 from "../../components/subcomponents/subscription/BlueBox2";
import BannerSection2 from "../../components/subcomponents/shared/BannerSection2";
import BannerSection3 from "../../components/subcomponents/shared/BannerSection3";
import BannerSection5 from "../../components/subcomponents/shared/BannerSection5";
export default class SubscriptionStorepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Head>
          <title>Sells: Subscription Store</title>
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
        <BannerSection3
          subheading={"Why should they have all the fun?"}
          heading={"Get your share of subscription Revenue"}
          image={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/subscription-logos/subscription-banner-2.png"
          }
          blackbuttontext={"Start Now"}
        />

        <BannerSection2
          rightimageurl={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/marketStandardSubscriptionFlows@2x-1.png"
          }
          heading={"Market Standard Subsription Flows"}
          bluesubheading={"Familiar & Intuitive Signup Process"}
          description="Customer Experience shouldn't be an expense. DailyKIT offers turnkey solutions for higher conversions."
          descriptionpoints={[
            "Showcase Subscription Plans in elegant cards",
            "Give your customers option to choose between Item Count, Servings & Delivery Week-Day.",
            "Increase Conversions by funneling Customers to preview menus prior to signing up.",
          ]}
        />

        <BlueBox2 heading={"Don't Just Manage, Own it."} />
        <BannerSection5
          heading={"Taking Your Store Beyond & Above"}
          description={
            "Incorporate Multiple Instructional or about us pages along with any other information suiting your brand."
          }
          rightimage={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/takingyourStoreAbove%26Beyond@2x.png"
          }
          box1icon={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/subscription-logos/About%20Pages.svg"
          }
          box2icon={
            "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/subscription-logos/FAQ%20Pages.svg"
          }
          box1title={"About Pages"}
          box2title={"FAQ Pages"}
          box1description={
            "Showcase as much Information you want eg: Chef, Sourcing, etc."
          }
          box2description={
            "Easily Highlight FAQs and How it Work Pages to Your Customers."
          }
        />
        <SpecialBanner5
          heading={"Why Choose DailyKIT"}
          subpara={
            "Are You Using A Plain Old Micro-Site For Online Ordering Or Worse, Do You Not Have An Online Store? It’s Vital To The Success Of Your Business To Have A Professional Looking Onine Store."
          }
          points={[
            [
              {
                heading: "Unlimited Categories",
                para: "Manage multiple categories for easy browsing.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/unlimited-categories.png",
              },
              {
                heading: "SEO-Friendly Pages",
                para: "URL-based pages for Products & Categories.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/seo-friendly.png",
              },
              {
                heading: "Product Tags",
                para: "Tag your products for easy filtering and discoverability.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/product-tags.png",
              },
              {
                heading: "Product Images",
                para: "Display Amazing Product Pictures for Higher Conversion.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/product-images.png",
              },
            ],
            [
              {
                heading: "Product Description",
                para: "Convert more via enticing product descriptions.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/product-description.png",
              },
              {
                heading: "Social Media Sharing",
                para: "Integrated Social Media sharing functionality on every product page.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/social-media-share.png",
              },
              {
                heading: "Desktop Friendly",
                para: "Don't miss out on the 20% of consumers ordering food through their laptops/desktops.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/desktop-friendly.png",
              },
              {
                heading: "Mobile & Tab Friendly",
                para: "Perfect experience through any browser app or in-app browsers.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/mobile-friendly.png",
              },
            ],
            [
              {
                heading: "Advanced Scheduling",
                para: "BreakFast, Lunch, Dinner or Daily/Weekly Recurring, Festive Menus.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Advance%20Scheduling.svg",
              },
              {
                heading: "Know your Margins",
                para: "Control your food cost with Sales Price Recommendations.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Margins.svg",
              },
              {
                heading: "Precise Configuration",
                para: "Configure Inventory, Packaging and Product Labels.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Precise%20Configuration.svg",
              },
            ],
            [
              {
                heading: "Smart Insights",
                para: "Automated Sales Reports with conversion details.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Smart%20Insights.svg",
              },
              {
                heading: "Discounts & Coupons",
                para: "Create Smart Rewards, Vouchers and more from CRM",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Discounts%20%26%20Coupons.svg",
              },
              {
                heading: "Delivery Integrations",
                para: "Supporting Selected Delivery Partners in your Area.",
                icon: "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/sell-why%20choose%20us/Delivery%20Integrations.svg",
              },
            ],
          ]}
          buttontext={"Schedule A Demo"}
          buttonlink={"#scheduledemo"}
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

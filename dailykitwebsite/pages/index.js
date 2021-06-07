import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Dailykit</title>
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
        {/* <script src="../components/mailerlite.js" defer></script> */}
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
          name="Dailykit: The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
          content="Dailykit is the only trend responsive platform that allows you to sell anything from Meal Kits, Meal Prep, Subscription, On Demand, Ready to Eat, Grocery..,etc and manage Operations like a boss with Inventory, Recipe Management, Menu Management, Product Management, Manage Ghost Brands, Order Management and Delivery Tracking and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

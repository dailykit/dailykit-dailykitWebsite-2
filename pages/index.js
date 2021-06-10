import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Dailykit</title>
        <meta
          name="Dailykit: The Only Trend-Responsive Food-Tech Solution You'll Ever Need."
          content="Dailykit is the only trend responsive platform that allows you to sell anything from Meal Kits, Meal Prep, Subscription, On Demand, Ready to Eat, Grocery..,etc and manage Operations like a boss with Inventory, Recipe Management, Menu Management, Product Management, Manage Ghost Brands, Order Management and Delivery Tracking and many more."
        />
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
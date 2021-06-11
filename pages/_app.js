import "../styles/globals.css";
import "../styles/dropdown.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@100;400;700;900&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-146874242-1"
        ></script>
        {/* meta tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter" content="dailykitorg" key="twhandle" /> */}

        <meta property="og:type" content="website" key="ogsitetype" />
        <meta property="og:site_name" content="Dailykit" key="ogsitename" />
        <meta
          property="og:title"
          content="Dailykit: The only trend responsive platform that you'll ever need."
          key="ogtitle"
        />
        <meta
          property="og:image"
          content="/assets/images/Logo.png"
          key="ogimage"
        />
        <meta property="og:url" content="https://dailykit.org" />
        <meta
          property="og:description"
          content="Dailykit is the only trend responsive platform that allows you to sell anything from Meal Kits, Meal Prep, Subscription, On Demand, Ready to Eat, Grocery..,etc and manage Operations like a boss with Inventory, Recipe Management, Menu Management, Product Management, Manage Ghost Brands, Order Management and Delivery Tracking and many more."
          key="ogdesc"
        />
        <link rel="icon" href="/Dailykit Icon.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

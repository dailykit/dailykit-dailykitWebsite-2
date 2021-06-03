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
      <Home />
      <Footer />
    </div>
  );
}

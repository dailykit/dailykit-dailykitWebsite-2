import React, { PureComponent } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Head from "next/head";
import BlackHeading from "../../../components/subcomponents/BlackHeading";
import BlogSection from "../../../components/subcomponents/BlogSection";
import GreenHeading from "../../../components/subcomponents/GreenHeading";
import Sidebar from "../../../components/subcomponents/Sidebar";
import FormSection1 from "../../../components/subcomponents/FormSection1";
export default class OurPhilosophyPage extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Case-study: Groctaurant-Case-Study</title>
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
          <script src="../components/mailerlite.js" defer></script>
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
        <OurPhilosophy />
        <Footer />
      </div>
    );
  }
}

export class OurPhilosophy extends PureComponent {
  render() {
    return (
      <div>
        <FormSection1
          dataAccount="3161173:g2o5g2c3i8"
          dataForm="4175704:a4w7j9"
        />
        <div className="head">
          <GreenHeading text="Our Philosophy" />
          <BlackHeading text="No Harvested Grain of Grocery should be lost wasted" />
        </div>
        {/* <--first sidebar--> */}
        <Sidebar
          rest={[
            {
              sidebar_heading: "WHY SHOULD BAKERIES DO MEAL KITS?",
              sidebar_link: [
                "Vision Statement",
                "The Reason",
                "Our Path",
                "The Future",
              ],
              para_heading: "The Premise",
              para: [
                "What is the future of Cooking? Does it become obsolete? Would Kitchen transform into Pantry? The answer to these questions reflects one fundamental problem. Problem that cooking via traditional Grocery is way too inconvenient. The problem that needs to be solved is of daily food, for which we are relied upon the Cooking. Consumers don’t have time for Grocery Shopping. They want to Shop for Meals. We believe in the future either Cooking will become obsolete or Meal Kits will thrive as a go to choice for the daily food. We fear the former and inspire from latter.",
              ],
              para2: [
                {
                  para2_heading: "Vision Statement",
                  para2: [
                    "To Abolish the unsaid right to food wastage so No harvested grain of grocery is lost",
                  ],
                },
                {
                  para2_heading: "The Reason",
                  para2: [
                    "Our existing food system is on the verge of collapse with shrinking farm lands and expanding population. It is estimated that our earth can only sustain a population of 9 Billion as will not have food to sustain the extra population.",
                  ],
                },
                {
                  para2_heading: "Our Path",
                  para2: [
                    "We aim to build a system where each individual know his/her immediate needs for grocery and by real time analysis we can plan and forsee the requirement and transmit the data to farmers so to grow and sow the exact needs.",

                    "Our aim is to introduce automation into food businesses and make them self reliant. Our team is built with former Restaurant Owners, Meal Kit Company Owners, Ghost Kitchen owners. We know each and every pain point of what it takes to get everything absolutely spot on.",

                    "While our technology can be used all across the food industry in different aspects, our focus is towards a gap which is widening and no one seems to be filling",
                  ],
                },
                {
                  para2_heading: "The Future",
                  para2: [
                    "The future of food consumption is here and we are leading the charge. We have all seen it in the movies and now we all have a chance to make it a reality. As the working population begins to adopt itself into newer ways of food consumption, accessibility is all that they need. Dailykit has done all the heavy lifting and we believe our clients have everything they need to run a successful food business be it Restaurant, Grocery, A Large Enterprise, Food StartUp, Meal Kit Company, To-Go Meals and every other business that one can possibly imagine.",

                    "The future is here and it’s now, adaptation must not be the cause for turning a blind eye to the future.",
                  ],
                },
              ],
            },
          ]}
        />

        <BlogSection
          blogs={[
            {
              id: "1",
              image:
                "https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/Screenshot%202021-04-14%20at%206.55.19%20PM.png",
              title: "HOW TO LAUNCH MEAL KITS AT YOUR RESTAURANT?",
              cardText:
                "There is an urgent need to make sure Restaurants try every possible way in which they can get people ordering. If you think you as a Restaurateur have tried everything then,think again. Yes,...",
              readMoreId: "#Readmore",
            },
            {
              id: "2",
              image:
                "https://lh6.googleusercontent.com/W179jGz7_CWkKJJHsQeertViy_N7W6nQASgk07vzJ_m6WWSfKCO3-BZzi6yAdjzak2R8o2758sHE8ovCYo9cWXrEZJMFK3KEXIttymyJ1FiqNIPQgQ0azI0R8OMoZeAiZzOqe1_A",
              title: "YOUR PACKAGING SHOULD BUILD BRAND RECALL",
              cardText:
                "Your brand is in a constant battle to retain customers,build confidence and encourage brand recall. To ensure this, a brand needs to build their brand voice. When it comes to food, brand voice...",
              readMoreId: "#Readmore",
            },
          ]}
          blogs_heading="CHECK OUT OUR BLOG"
        />
      </div>
    );
  }
}

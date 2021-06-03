import React from "react";
const VideoBanner = (props) => {
  return (
    <div className="image video-1">
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ opacity: "0.1" }}
      >
        <source
          src="https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/home-video-3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="header">
        <div className="heading-1">{props.heading1text}</div>
        <h2 className="nunito">{props.heading2text}</h2>
        <br />
        <h5>{props.subheadingtext}</h5>
        <br />
        <h4
          id="yourElem"
          className="all-text"
          onClick={setInterval(() => {
            document
              .querySelector("#yourElem")
              .text(props.toggletextarr[Math.floor(Math.random() * 4) + 0]);
          }, 2000)}
        >
          {props.toggletextarr[0]}
        </h4>
        <br />
        <br />
        <a href={props.whitebuttonlink}>
          <button type="button" className="btn-style-thirteen white">
            {props.whitebuttontext}
          </button>
        </a>
        &ensp;
        {/* <a href="/">
          <button type="button" className="btn-style-ten purple">
            {props.purplebuttontext}
          </button>
        </a>
        <br />
        <br />
        <div className="offer">{props.offertext}</div> */}
      </div>
    </div>
  );
};

export default VideoBanner;

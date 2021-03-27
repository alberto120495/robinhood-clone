import React from "react";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";
import TimeLine from "./TimeLine";
import { Avatar } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

function Newsfeed() {
  const popularTopics = [
    "Tecnology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Tecnology",
    "China",
    "Pharma",
  ];
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,656</h1>
            <p>+$44.63,(+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
          <div className="timeLine">
            <TimeLine />
          </div>
          <div className="newfeed__buying">
            <h2>Buying Power</h2>
            <h2>$4.11</h2>
          </div>
          <div className="newsfeed__marketSection">
            <div className="newsfeed__marketSection__box">
              <p>Markets Closed</p>
              <h1>Happy Thanksgiving</h1>
            </div>
          </div>
          <div className="newsfeed__popularlist">
            <div className="newsfeed__popularlist__intro">
              <h1>Popular lists</h1>
              <p>Show more</p>
            </div>
            <div className="newsfeed__popularlists__badges">
              {popularTopics.map((topic) => (
                <Chip
                  className="topic__badge"
                  variant="Basic"
                  label={topic}
                  avatar={
                    <Avatar
                      src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;

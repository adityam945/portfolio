import { useState } from "react";
import "./Home.css";

import HomeImage from "../../assets/coder.jpg";
import { Grid, Button } from "@mui/material";
import Me from "../../assets/me.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
  const [image, setImage] = useState(false);

  function onClickSetImage() {
    if (image) {
      setImage(false);
    } else {
      setImage(true);
    }
  }

  return (
    <>
      <div>
        {/* <img src={BlackImage} /> */}
        <Grid container className="gradientBackground">
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            className="apperarIn"
            style={{ padding: 30, color: "black" }}
          >
            <div className="module">
              <div className="titleText">WELCOME!</div>

              <p className="titleText"> Who is ADITYA M </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <div class="word w1">FORMER SOFTWARE DEVELOPER 💻 </div>
                <div class="word w2">A COMPUTER GRAD STUDENT 🧑‍🎓<a style={{fontSize: 20, borderBottom: '1px solid red', color: 'red'}}>@fsu
                </a> </div>
                <div class="word w3">
                ✨ INTRESTED IN 🤔🤗
                </div>
                <div class="word w4">CLOUD ☁️ AND DATA 📈 PROBLEMS </div>
                <div class="word w5">AND LOVES GAMES 🎮, MUSIC 🎵</div>
              </div>
              <div style={{ marginTop: 100 }} className="getToKnowMe">
                GET TO KNOW ME BETTER
                <br />
                <Link
                  to="/experienceandprojects"
                  style={{ textDecoration: "none" }}
                >
                  <Button>Experience and Projects</Button>
                </Link>
                <Link to="/resume" style={{ textDecoration: "none" }}>
                  <Button>Resume/CV</Button>
                </Link>
              </div>
            </div>
          </Grid>
          {image && (
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              className="imageFromRight imageFromRightHide"
            >
              <img
                alt="Home"
                src={Me}
                className="imageSetSizeMe"
                style={{ marginTop: 30 }}
              />
            </Grid>
          )}
          {!image && (
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              className="imageFromRight imageFromRightHide"
            >
              <img
                alt="Home"
                src={HomeImage}
                className="imageSetSize"
                style={{ marginTop: 30 }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6} lg={6} className="imageFromRight ">
            {/* <img src={HomeImage} className="imageSetSize"/> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            className="apperarIn"
            style={{ textAlign: "center", display: "flex", justifyContent: "center" }}

          >
            <Button
              style={{
                fontSize: 20,
                border: "2px yellow solid",
                color: "orange",
                textAlign: "center"
              }}
              onClick={() => onClickSetImage()}
            >
              {image ? "Ah! snap go back " : "Want to see me?"}
            </Button>
            
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;

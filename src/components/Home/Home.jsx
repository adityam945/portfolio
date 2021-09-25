import { useState } from "react";
import "./Home.css";

import HomeImage from "../../assets/coder.jpg";
import { Grid, Button, Link } from "@mui/material";
import Me from "../../assets/me.jpg"

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
      <div >
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
                <div class="word w1">COMPUTER ENGINEER 🧑‍🔬 </div>
                <div class="word w2">SOFTWARE DEVELOPER 💻</div>
                <div class="word w3"> WORKING CURRENTLY 👔
                  <Link
                    href="http://www.grssl.com/"
                    style={{
                      fontSize: 15,
                      borderBottom: "1px blue solid",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    @grassroots 
                  </Link></div>
                <div class="word w4">
                 
                  CLOUD ☁️ AND DATA 📈 ENTHSIAST
                </div>
                <div class="word w5">LOVES  GAMES 🎮,  MUSIC 🎵</div>
              </div>
              <div style={{ marginTop: 100 }} className="getToKnowMe">
                GET TO KNOW ME BETTER<br/> <Button>Projects</Button>{" "}
                <Button>About me</Button>
              </div>
            </div>
          </Grid>
          {image && (
            <Grid item xs={12} md={6} lg={5} className="imageFromRight imageFromRightHide">
              <img alt="Home" src={Me} style={{maxHeight:625, marginTop: 30}}/>
            </Grid>
          ) }
          {!image && (
            
              <Grid item xs={12} md={6} lg={5} className="imageFromRight imageFromRightHide">
                <img alt="Home" src={HomeImage} className="imageSetSize" style={{ marginTop: 30}} />
              </Grid>
            )
          }
          <Grid item xs={12} md={6} lg={6} className="imageFromRight ">
            {/* <img src={HomeImage} className="imageSetSize"/> */}
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="apperarIn" style={{textAlign: "center"}}>
            <Button
              style={{
                fontSize: 20,
                border: "2px yellow solid",
                color: "orange",
              }}
              onClick={() => onClickSetImage()}
            >
              {image ? "Ah! snap go back " : "Want to see me?"}
            </Button>
            {/* {image === "showMe"?? } */}

            {image}

            {/* <div class="wrap">
    <div class="block_1">Hello</div>
    <div class="block_2">Hello</div>
    <div class="block_3">Hello</div>
</div> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;

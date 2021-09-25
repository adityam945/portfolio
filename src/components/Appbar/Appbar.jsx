import { Grid } from "@mui/material";
import "./Appbar.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function AppBar(props) {
  return (
    <>
      <div className="headerComponent">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Grid container>
            <Grid item xs={12} md={3} lg={3}>
              <Link to="/" style={{ cursor: "pointer", textDecoration:"none", fontSize: 42 }}>
              <h2 className="headerTitle" >{"<Profile />"}</h2>

              </Link>
            </Grid>
            <Grid item xs={12} md={5} lg={4.5}></Grid>
            <Grid item xs={12} md={5} lg={4.5} className="headerLinks">
              <Link
                className="headerAStyle"
                // onClick={() => }
                to="/experienceandprojects"
                style={{ cursor: "pointer", textDecoration:"none",  }}
              >
               Experience and Projects 
              </Link >|
              <Link  to="/resume"
                style={{ cursor: "pointer", textDecoration:"none" }}>
              <a
                className="headerAStyle"
               
              >
                Resume/CV
              </a>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

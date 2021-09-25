import { Button, Grid, Link, Typography } from "@mui/material";
import "./Projects.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import MoreIcon from "@mui/icons-material/More";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";

export default function Projects() {
  const [viewWork, setViewWork] = useState(true);

  const [viewInternship, setViewInternship] = useState(true);

  const [viewProjects, setViewProjects] = useState(true);


  function internshipCondition(){
    if(viewProjects){
      setViewInternship(false)
    }else{
      setViewInternship(true)

    }
  }

  function projectCondition(){
    if(viewProjects){
      setViewProjects(false)
    }else{
      setViewProjects(true)

    }
  }

  function workCondition(){
    if(viewProjects){
      setViewWork(false)
    }else{
      setViewWork(true)

    }
  }

  return (
    <div style={{ backgroundColor: "#212121", minHeight: "82vh", padding: 20 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{ textAlign: "center" }}
          className="apperarIn"
        >
          <div className="container1 div1">
            Experience and Projects
            <br />
            <div className="flip1 div1">
              <div className="div1">
                <div className="div1">Workshops and Certification</div>
              </div>
              <div className="div1">
                <div className="div1"> Work experience and Internships</div>
              </div>
              <div className="div1">
                <div className="div1">Academic projects and Research</div>
              </div>
            </div>
          </div>
        </Grid>
        {/* <Grid  item
          xs={12}
          md={12}
          lg={12}> 
        <Typography variant="h4" className="filterText">Filter</Typography>
        <Button color="warning" onClick={() => workCondition()}>Work Exp </Button>
        <Button color="warning" onClick={() => internshipCondition()}>Internship Exp </Button>
        <Button color="warning" onClick={() => projectCondition()}>Project </Button>
          </Grid> */}
        {viewWork && <WorkExperienceCardComponent />}
        {viewInternship && <InternshipCardComponent />}
        {viewProjects && <ProjectsCardComponent />}
      </Grid>
      <div style={{ marginBottom: 40 }} />
    </div>
  );
}

const projectCards = [
  {
    id: "6",
    projectTitle: "Taralabalu Samsthana",
    projectShortDesc: "Native Mobile Application for Religious institute",
    projectDescription: [
      {
        description:
          "Designed and developed a mobile application for a religious institute using React-Native framework. ",
      },
      {
        description:
          "Faced complications and resolved complications in audio recording and submission",
      },
    ],
    github: "",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.taralabalu.androidapp&hl=en_IN",
    otherMaterialLink: "",
    projectImage: [
      "Mobile App,",
      " React-Native,",
      " Android/iOS",
      " Rest/Mock API",
    ],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "8",
    projectTitle: "Performance Based Adaptive Questioning ",
    projectShortDesc: "A student evaluation application",
    projectDescription: [
      {
        description:
          "A performance adaptive test to test ability of students in an other approach.",
      },
      {
        description:
          "Developed a responsive web application using API and React JS framework.",
      },
    ],
    github: "https://github.com/adityam945/web-mini-adaptive-question",
    liveLink: "https://web-mini-adaptive-question-adityam945.vercel.app/",
    otherMaterialLink: "",
    projectImage: [
      "ReactJS,",
      " HTML, CSS,",
      " MongoDB,",
      " NoSQL, and",
      " Rest API",
    ],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "10",
    projectTitle:
      "Image Crypotography and Steganography for Secure Data Transfer",
    projectShortDesc: "A cryptography system that encrypts visual data",
    projectDescription: [
      {
        description:
          "A research project that resulted in development of a secure cryptosystem",
      },
      {
        description:
          "Two popular image cryptography techniques are combined to facilitate a complex data encryption",
      },
    ],
    github: "https://github.com/adityam945/",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: [
      "Image Cryptography,",
      " Steganography,",
      " Python, Flask,",
      " and HTML, CSS",
    ],
    otherMaterialLinkname: "",
    backgroundColorBody: "30",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "7",
    projectTitle: "VTU-CSE Native Mobile App",
    projectShortDesc:
      "A mobile application that helps VTU students with academic materials",
    projectDescription: [
      {
        description:
          "An useful application that helps students to access academic resources of CSE department of VTU. ",
      },
      {
        description:
          "Designed and Developed a mobile application using API and React-Native framework. ",
      },
    ],
    github: "https://github.com/adityam945/VTU-CSE-App",
    liveLink: "",
    otherMaterialLink:
      "https://github.com/adityam945/VTU-CSE-App/blob/master/cse-vtu.apk?raw=true",
    projectImage: ["JSF,", " MySQL,", " HTML, CSS and", " JDBC"],
    otherMaterialLinkname: ".apk file",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "1",
    projectTitle: "Slot Booking System",
    projectShortDesc: "CRUD JSF-HTML, MySQL slot booking system",

    projectDescription: [
      {
        description:
          "This project aim is to provide slot booking facility in needed sectors.",
      },
      {
        description:
          "Use of Java Server Faces and MySQL database to design and develop this system.",
      },
    ],
    github: "https://github.com/adityam945/Simple-JSF_DBMS-CURD-operation",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: ["JSF,", " MySQL,", " HTML, CSS and", " JDBC"],
    otherMaterialLinkname: "",
    backgroundColorBody: "#cddc39",
    backgroundColorTitel: "#4caf50",
    backgroundColorAction: "#8bc34a",
  },
  {
    id: "2",
    projectTitle: "COVID-19 tracker",
    projectShortDesc: "React appliationlLive covid-19 tracker",

    projectDescription: [
      {
        description:
          "This project aim is to provide slot booking facility in needed sectors.",
      },
      {
        description:
          "Developed using ReactJS frameworks by fetching data from API that is updated daily.",
      },
    ],
    github: "https://github.com/adityam945/React-Simple-APIcall-Covid19-india",
    liveLink: "https://covid-19tracker-adityam945.netlify.app/",
    otherMaterialLink: "",
    projectImage: ["React,", " HTML, CSS and", " Public API"],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "3",
    projectTitle: "HTML-JS Simple Calculator",
    projectShortDesc: "Simple Calculator using HTML, CSS and JavaScript",

    projectDescription: [
      {
        description:
          "TA Simple Calculator using HTML/CSS to perform basic math calculations.",
      },
      {
        description: "DDesigned this after a web development workshop.",
      },
    ],
    github: "https://github.com/adityam945/JS-HTML-Simple_calculator",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: [" HTML, CSS and", " JavaScript"],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "4",
    projectTitle: "TO-DO List App",
    projectShortDesc: "A native mobile application to track to-do's of a day",

    projectDescription: [
      {
        description:
          "TO-DO List mobile application, to keep daily workflow in action and to remind oneself to complete a task",
      },
      {
        description:
          "Developed using React-Native framework which is native to both android and iOS operating system",
      },
    ],
    github: "https://github.com/adityam945/TO-DO-List-App",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: ["Mobile App,", " React-Native,", " Android/iOS", " API"],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "5",
    projectTitle: "Machine Learning-Python App",
    projectShortDesc: "Mobile App that render Machine Learning concepts",
    projectDescription: [
      {
        description:
          "This Mobile App renders datasets reading using Machine learning python project",
      },
      {
        description:
          "Concepts of Linear Regression, KNN and more I learnt in workshop is rendered in an Mobile app",
      },
    ],

    github: "https://github.com/adityam945/ML-APP-Final",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: ["Mobile App,", " React-Native,", " Android/iOS", " API"],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
  {
    id: "9",
    projectTitle: "Working of Queue in OpenGL ",
    projectShortDesc: "A OpenGL program representing Queue Data sturucture ",
    projectDescription: [
      {
        description:
          "This project displayed working of Queue and double ended queue",
      },
      {
        description:
          "This was part of our college project which hepled us learn openGL functions and concepts",
      },
    ],
    github: "https://github.com/adityam945/",
    liveLink: "",
    otherMaterialLink: "",
    projectImage: ["OpenGL,", " Data Structures,", " and C++", ""],
    otherMaterialLinkname: "",
    backgroundColorBody: "",
    backgroundColorTitel: "",
    backgroundColorAction: "",
  },
];

const internshipsArray = [
  {
    id: "01",
    projectTitle: "Esilicon TechnoDesign Private Limited",
    projectShortDesc: "July 2020 - September 2020",
    projectDescription: [
      {
        description:
          "Developed Rest API and API gateway to support varoius modules and actions.",
      },
      {
        description:
          "Developed a mobile application that accessed the API to facilitate user interaction with API. ",
      },
    ],
  },
  {
    id: "02",
    projectTitle: "Marek Adventures",
    projectShortDesc: "October 2020 - December 2020",
    projectDescription: [
      {
        description:
          "Designed aesthetic website for a travelling company based in Namibia.",
      },

      {
        description:
          "Was the lead developer website coding the main theme and pages on the website.",
      },
      {
        description:
          "Managed to set up domain for hosting website and private mail.",
      },
    ],
  },
  {
    id: "03",
    projectTitle: "Oxyease",
    projectShortDesc: "February 2021 - June 2021",
    projectDescription: [
      {
        description:
          "Developing an application that facilitates buying, selling and renting oxygen machines.",
      },
      {
        description:
          "Designed a relational database using MySQL database with various stored procedures. ",
      },
      {
        description:
          "Developed a API using NodeJS and Express to fetch and query data from database.",
      },
      {
        description:
          "Designed a graphical user interface that facilitated fetch, post, update and delete data in database.",
      },
    ],
  },
];

const workExperience = [
  {
    id: "01",
    projectTitle: "Grassroots - GRSSL",
    projectShortDesc: "August 2020 - Present",
    role: "Software Developer",
    companyWebLink: "http://www.grssl.com/",
    // email: "aditya.m@grassrootsbpo.in",
    visible: "yes",
  },
  {
    visible: "no",
  },
  {
    visible: "no",
  },
];

function WorkExperienceCardComponent() {
  return (
    <>
      {workExperience.map((workExpArr) => (
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          style={{ marginTop: 20, display: "flex" }}
          justifyContent="center"
          alignItems="center"
          className="apperarIn projectCards"
        >
          {workExpArr.visible === "yes" ? (
            <Card
              className="titleStyleCard"
              style={{
                minWidth: "100%",
                backgroundColor: workExperience.backgroundColor,
              }}
            >
              <Typography
                className="titleStyleCard"
                variant="h4"
                style={{
                  fontFamily: "Gemunu Libre, sans-serif",
                  backgroundColor: "#e53935",
                  padding: 12,
                  minHeight: 80,
                  maxHeight: 140,
                  overflowY: "auto",
                  borderBottom: "1px solid black",
                }}
              >
                {workExpArr.projectTitle}
                <Typography
                  variant="h5"
                  className="titleStyleCard"
                  style={{ fontFamily: "Gemunu Libre, sans-serif" }}
                >
                  {workExpArr.projectShortDesc}
                  <br />
                  {workExpArr.role}
                  <br />
                  <a
                    href={workExpArr.companyWebLink}
                    className="companylink"
                    style={{ textDecoration: "none" }}
                  >
                    Grassroots
                  </a>
                </Typography>
              </Typography>
              <div></div>
            </Card>
          ) : null}
        </Grid>
      ))}
    </>
  );
}

function InternshipCardComponent() {
  return (
    <>
      {internshipsArray.map((internArr) => (
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          style={{ marginTop: 20, display: "flex" }}
          justifyContent="center"
          alignItems="center"
          className="apperarIn projectCards"
        >
          <Card className="titleStyleCard">
            <Typography
              className="titleStyleCard"
              variant="h4"
              style={{
                fontFamily: "Gemunu Libre, sans-serif",
                backgroundColor: "#4caf50",
                padding: 12,
                minHeight: 80,
                maxHeight: 80,
                overflowY: "auto",
              }}
            >
              {internArr.projectTitle}
              <Typography
                variant="h5"
                className="titleStyleCard"
                style={{ fontFamily: "Gemunu Libre, sans-serif" }}
              >
                {internArr.projectShortDesc}
              </Typography>
            </Typography>
            <div
              style={{
                padding: 12,
                minHeight: 160,
                maxHeight: 160,
                padding: 20,
                textAlign: "center",
                overflowY: "auto",
              }}
            >
              {internArr.projectDescription.map((internArrDesc) => (
                <>
                  <li>{internArrDesc.description}</li>
                  <br />
                </>
              ))}
            </div>
          </Card>
        </Grid>
      ))}
    </>
  );
}

function ProjectsCardComponent() {
  return (
    <>
      {projectCards.map((cardItem) => (
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          style={{ marginTop: 20, display: "flex" }}
          justifyContent="center"
          alignItems="center"
          className="apperarIn projectCards"
        >
          <Card
            style={{ minWidth: "100%" }}
            className="titleStyleCardBodyHoverStyle titleStyleCard"
          >
            <Typography
              variant="h4"
              className="titleStyleCardTitle"
              style={{
                paddingTop: 10,
                fontFamily: "Gemunu Libre, sans-serif",
                borderBottom: "1px solid black",
                padding: 12,
                minHeight: 115,
                maxHeight: 115,
                overflowY: "auto",

                flexDirection: "column",
              }}
            >
              {cardItem.projectTitle}
              <Typography
                variant="h5"
                className="titleStyleCard"
                style={{ fontFamily: "Gemunu Libre, sans-serif" }}
              >
                {cardItem.projectShortDesc}
              </Typography>
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1.5px solid black",
              }}
            >
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                {cardItem.projectImage}
              </div>
              <div
                style={{
                  padding: 20,
                  borderLeft: "1.5px solid black",
                  minHeight: 160,
                  maxHeight: 160,
                  overflowY: "auto",
                  alignItems: "center",
                }}
              >
                {cardItem.projectDescription.map((cardItemDesc) => (
                  <ul>
                    <li>{cardItemDesc.description}</li>
                  </ul>
                ))}
              </div>
            </div>

            <CardActions
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {cardItem.github !== "" && (
                <a className="aNoStyle" href={cardItem.github}>
                  Github <GitHubIcon style={{ marginLeft: 5 }} />{" "}
                </a>
              )}
              {cardItem.liveLink !== "" && (
                <a className="aNoStyle" href={cardItem.liveLink}>
                  Visit Live <LinkIcon style={{ marginLeft: 5 }} />{" "}
                </a>
              )}
              {cardItem.otherMaterialLink !== "" && (
                <a className="aNoStyle" href={cardItem.otherMaterialLink}>
                  {cardItem.otherMaterialLinkname}{" "}
                  <MoreIcon style={{ marginLeft: 5 }} />{" "}
                </a>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

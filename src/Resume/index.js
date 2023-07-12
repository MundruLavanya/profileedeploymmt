import React from "react";
// import styles from './Resume.module.css';
import LavanyaM from "./LavanyaM.pdf";
import { Link } from "react-router-dom";

function Header({ onDownloadClick }) {
  return (
    <header className="header">
      <h1>Lavanya Mundru</h1>
      <p>Email: lavanyamundru2000@gmail.com | Phone: +91 9063695846</p>
      {/* <p>LinkedIn: linkedin.com/in/vishnukapa</p> */}
      <button className="downloadButton" onClick={onDownloadClick}>
        <a download href={LavanyaM}>
          Download Resume
        </a>
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">© 2023 Lavanya M. All rights reserved.</footer>
  );
}

function Resume() {
  const handleDownloadClick = () => {
    // Logic to download the resume file
    // You can implement the actual download functionality here
    console.log("Downloading resume...");
  };

  return (
    <div className="resume">
      <Header onDownloadClick={handleDownloadClick} />

      <main className="main">
        <h1>Lavanya M</h1>
        <p>Email: lavanyamundru2000@gmail.com | Phone: +91 9063695846</p>

        <h4>
          <b>Summary</b>
        </h4>
        <ul>
          <li>
            Developing user interface applications and professional web
            applications using <b>HTML5, CSS3, JavaScript,React.js </b>and JSON
          </li>
          <li>
            Developing web 2.0 apps using JavaScript and proficient in
            developing <b>Single Page Application (SPA).</b>
          </li>
          <li>
            Developing web application using<b>HTML5, CSS3, JavaScript</b>{" "}
          </li>
          <li>
            Developing <b>Responsive Web Design (RWD)</b> using grid-based
            layout, CSS media queries and creating responsive Web Designs and
            building mobile friendly accessible web pages using BOOTSTRAP
            classes.
          </li>

          {/* Add more summary points */}
        </ul>

        <h4>
          <b>Projects</b>
        </h4>

        <p>
          {" "}
          <b>⮚To-Do-List</b>{" "}
          <span>
            <Link to="/todo">www.todolist.com</Link>{" "}
          </span>{" "}
        </p>
        <ul>
          <li>
            To-do lists are a list of tasks that an individual needs to complete
            or accomplish. Tasks are typically put in order by priority or
            importance. A to-do list can be written on a piece of paper or by
            utilizing task management software.
          </li>
        </ul>
        <p>
          {" "}
          <b>⮚Weather-App</b>{" "}
          <span>
            <Link to="/Weather">www.Weather.com</Link>{" "}
          </span>{" "}
        </p>
        <ul>
          <li>
            Weather App is the application of science and technology to predict
            the conditions of the atmosphere for a given location and time.
          </li>
        </ul>
        <ul>
          <li>
            The weather app also provides atmospheric pressure, weather
            conditions, visibility distance, relative humidity, precipitation in
            different unites, dew point, wind speed and direction, in addition
            to ten days in future and hourly weather forecast.
          </li>
        </ul>
        <p>
          {" "}
          <b>⮚ Landing-Page</b>{" "}
          <span>
            <Link to="/landing-page">www.Landing-Page.com</Link>{" "}
          </span>{" "}
        </p>

        <ul>
          <li>
            A landing page focuses visitors' attention on the content. They can
            either complete the call to action or return to search results.
            Attract different types of customers. Custom landing pages can be
            created to appeal to different types of customers
          </li>
        </ul>

        <h4>
          <b>Education</b>
        </h4>
        <ul>
          <li>⮚2017-2020 B.Sc(MSCS) JKC degree college, Guntur with 76%</li>
          <li>⮚2015-2017 sri chaitanya Junior College, Guntur with 88.3%</li>
        </ul>

        <h4>
          <b>Skills</b>
        </h4>
        <ul>
          <li>⮚React.js,JavaScript,React Hooks,REST APIs,Git,HTML,CSS</li>
        </ul>
        <h4>
          <b>Personal Details</b>
        </h4>
        <ul>
          <li>
            <b>NAME :</b> M.Lavanya
          </li>
          <li>
            <b>FATHER’S NAME : </b>M.Dana Malleshwar rao
          </li>
          <li>
            <b>DATE OF BIRTH : </b>22/06/2000
          </li>
          <li>LANGUAGES :English, Telugu</li>
        </ul>
        <h4>
          <b>DECLARATION</b>
        </h4>
        <ul>
          <li>
            I here by declare that above said information is true and genuine to
            the best of my knowledge.
          </li>
        </ul>
        <ul>
          <li>
            <b>PLACE: </b>Hyderabad
          </li>
        </ul>
        <ul>
          <li>
            <b>(Lavanya Mundru)</b>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default Resume;

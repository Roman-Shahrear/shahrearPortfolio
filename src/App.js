import { useState } from 'react';
import './App.css';
import Education from './Education';
import Work from './Work';
import Programming from './Programming';
import Project from './Project';
import Testimonial from './Testimonial';





function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);

  function setAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    setAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">SHAHREAR WORLD!</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items">Home</span>
            <span className="mx-4 nav-items">About me</span>
            <span className="mx-4 nav-items">Resume</span>
            <span className="mx-4 nav-items">Testimonial</span>
            <span className="mx-4 nav-items">Contact me</span>
          </div>
        </nav>

        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-comtent-center im-text-section">
              <span className="im-text">
                Hello, I'm<span className="name-im-text"> Roman Shahrear</span>
              </span>
              <span className="im-text-enthusiastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="im-text-subheading">
                Knack of building applications with front and back operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="hire-me">Hire me</button>
                <button className="get-resume">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dilmb6lin/image/upload/v1695991246/49039929_2142115356051270_8898495831502487552_n_yoyip2.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                src="https://lottie.host/78d38663-e02a-4f6c-9418-c50d47938b34/x2koqHCUoz.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full stack web developer with background knowledge in Mern Stack
                along with a knack of building applications with utmost
                efficiency.Strong professional with a B.S.C willing to be an
                asset for an organization.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full stack single page web applications development</li>
                    <li>Interactive front end as per the design</li>
                    <li>
                      Node.js, Express.js, MongoDb (All backend technologies)
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column"></div>

      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>

        <div className="resume-new-section row"
         style={{ width: "70%", marginInline:"auto"}}
        >
          <div className="col-lg-4 col-md-4 resume-left-section px-0 shadow-lg d-flex flex-row">
            <div className="d-flex flex-column bg-new text-white">

                <span className="icon-span"><i className="fa-solid fa-graduation-cap"></i>
                </span>
                <span className="icon-span"><i className="fa-solid fa-person-digging"></i>
                </span>
                <span className="icon-span"><i className="fa-solid fa-code"></i>
                </span>
                <span className="icon-span"><i className="fa-solid fa-diagram-project"></i>
                </span>
            </div>

            <div className="d-flex flex-column">
                <span
                className= {
                  education === false
                  ? " resume-options-items"
                  : " selected resume-options-items "
              }
                  onClick={() => {
                    ChangeState(seteducation, true);
                }} 
                >
                  Education {""}
                  </span>
                <span
                className={
                  workhistory === false
                  ? " resume-options-items "
                  : " selected resume-options-items "
              }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
                >
                  Work{""}
                </span>
                <span 
                  className= {
                    programmings === false
                    ? " resume-options-items "
                    : " selected resume-options-items "
              }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
                >
                  Programming {""}
                  </span>
                <span
                  className= {
                    projects === false
                    ? " resume-options-items "
                    : " selected resume-options-items "
              }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
                >
                  Projects {""}
                </span>
            </div>

          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
              {education === true && <Education/>}
              {workhistory === true && <Work/>}
              {programmings === true && <Programming/>}
              {projects === true && <Project/>}
          </div>
          
        </div>
      </div>

      <div className="testimonial-part my-5">

        <div className="testimonial-inner-part d-flex flex-column">
                <span className="about-me-text">Testimonials</span>
                <span className="why-text-sub mb-5">
                  What my client say about me!
                </span>
                <Testimonial/>
            </div>
          </div>
    </div>
  );
}

export default App;

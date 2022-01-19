import "./Projects.css";

function Projects() {
  const handleClick = () => {
    window.open("https://time2riddle.netlify.app/");
  };
  const handleClick2 = () => {
    window.open("https://tech-care.netlify.app/");
  };
  const handleClick3 = () => {
    window.open("https://party-on.netlify.app/");
  };
  return (
    <>
      <div className="ProjectGrid" id="projects">
        <div className="ProjectGridDiv1">
          <h1 className="ProjectGridTitle">Projects</h1>
        </div>
        <div className="ProjectGridDiv2">
          <div className="Project1">
            <div className="Project1Img">
              <img
                className="Time2Riddle"
                src="https://i.imgur.com/PS1xGAT.png"
                alt="Website1"
              />
            </div>
            <div className="Project1Info">
              <h1 className="Project1Title">Time2Riddle</h1>
              <p className="Projectt1Description">
                I enjoy riddles, like The Riddler loves tormenting Batman. So I
                designed and built this app, so users could login, create
                riddles, and solve riddles. Users can also keep record of all
                the riddles they created on there profile page.
              </p>
              <button className="ProjectButton" onClick={handleClick}>
                Deployed Site
              </button>
            </div>
          </div>
          <div className="Project2">
            <div className="Project2Img">
              <img
                className="Tech-Care"
                src="https://i.imgur.com/nvX4N6O.png"
                alt="Tech-Care"
              />
            </div>
            <div className="Project2Info">
              <h1 className="Project2Title">Tech-Care</h1>
              <p className="Project2Description">
                Tech-Care was a class grouped based project. We designed and
                built this app to help students or people interested in coding
                find the perfect laptop. Users can sign in and view laptops. As
                well as, create a suggested laptop that they beleive is reliable
                and affordable.
              </p>
              <button onClick={handleClick2} className="ProjectButton">
                Deployed Site
              </button>
            </div>
          </div>
          <div className="Project3">
            <div className="Project3Img">
              <img
                className="Party-On"
                src="https://i.imgur.com/dx2ANti.png"
                alt="Party-On"
              />
            </div>
            <div className="Project3Info">
              <h1 className="Project3Title">Party-On</h1>
              <p className="Project3Description">
                Party-On is an App that Users can create, delete, and view:
                Party drinks, Party Platters, and Party Music suggestions. The
                app was themed after legendary rock stars Wayne Cambell and
                Garth Algar. From the amazing movie "Wayne's World".
              </p>
              <button onClick={handleClick3} className="ProjectButton">
                Deployed Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

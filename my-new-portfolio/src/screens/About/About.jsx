import "./About.css";

function About() {
  return (
    <>
      {/* <section className="AboutSection"> */}
      <div className="AboutDiv" id="about">
        <div className="AboutProfileDiv">
          <img
            className="AboutProfilePic"
            src="https://i.imgur.com/Fx1RWQo.jpg"
            alt="profile"
          />
          <div className="AboutProfileInfo">
            <h1 className="AboutProfileTitle">Greetings</h1>
            <p className="AboutPara">
              <span className="AboutSpan1">
                Hello there, my name is Theodore Chang, but please call me Theo.
                Theodore is only when I wear a tie. I am a recent graduate from
                the coding bootcamp General Assembly. I finished there 12 week,
                400 plus hours of Immersive Software Engineering. Learning
                JavaScript, React, Ruby on Rails, and other technical skills.
              </span>
              <br />
              <br />
              <span className="AboutSpan2">
                Before I chose to become a software engineer, my previous title
                was a CAD Design Specialist. Building and testing digital dental
                implant libraries with the companies dental attachments. My
                daily tasks were to assist customers, help download the library
                into there 3d software, check scan alignments on there side, and
                answer any technical questions. All of this has taught me to be
                attentive to detail, be observant, and find solutions quickly.
                All of which I believe are important skills to have, as a
                software engineer.
              </span>
              <br />
              <br />
              <span className="AboutSpan3">
                After graduating from General Assembly. I enjoyed learning all
                these skills I developed, but it felt like it wasn't enough. So
                I took it upon myslef to learn more. During my free time, I
                spend a couple of hours learning a new coding language. I try to
                myself versitile, wherever I work at. Just so that if anyone
                needs help, I'm more than happy to assist.
              </span>
              <br />
              <br />
              <span className="AboutSpan4">
                During my off time. I enjoy working out, hanging out with my
                cat, crafting cocktails, and reading Batman comic's.
              </span>
            </p>
          </div>
        </div>

        <div className="SkillTitleDiv">
          <h1 className="SkillTitle">Skills</h1>
        </div>

        <div className="SkillIcon">
          <div className="SkillIconDiv">
            <img
              id="HTML"
              className="Icon"
              src="https://i.imgur.com/zPJUmDX.png"
              alt="HTML"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="CSS"
              className="Icon"
              src="https://i.imgur.com/M0IXKSE.png"
              alt="CSS"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="JavaScript"
              className="Icon"
              src="https://i.imgur.com/HawvR9V.png"
              alt="JavaScript"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="React"
              className="Icon"
              src="https://i.imgur.com/rdqtCeM.png"
              alt="React"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="NodeJS"
              className="Icon"
              src="https://i.imgur.com/P3gzkqd.png"
              alt="NodeJS"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="MongoDB"
              className="Icon"
              src="https://i.imgur.com/IY9b3ki.png"
              alt="mongoDB"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="PostgreSQL"
              className="Icon"
              src="https://i.imgur.com/9jL94Qy.png"
              alt="PostGreSQL"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="RubyRails"
              className="Icon"
              src="https://i.imgur.com/ZXs3oAp.png"
              alt="Ruby"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="CPlusPlus"
              className="Icon"
              src="https://i.imgur.com/cdAaTIa.png"
              alt="C++"
            />
          </div>
          <div className="SkillIconDiv">
            <img
              id="Python"
              className="Icon"
              src="https://i.imgur.com/8CMKWF8.png"
              alt="Python"
            />
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}

export default About;

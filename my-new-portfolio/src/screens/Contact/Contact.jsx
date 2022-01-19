import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3eni7zn",
        "template_92bartl",
        form.current,
        "user_rZ2Mg1FUCitjWp55b1gYg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/theodore-chang-5a529b176/");
  };
  const handleClick2 = () => {
    window.open(
      "https://drive.google.com/file/d/1vsqP3mSowsps5Z8aalvaj0HdIdpbByAy/view?usp=sharing"
    );
  };

  return (
    <>
      <div className="ContactGrid" id="contact">
        <div className="ContactTitle">
          <h1 className="ContactH1">Contact</h1>
        </div>
        <div className="Contact">
          <p className="ContactInfo">
            Want to get in touch. Fill in your info and send me a message. Or
            you can reach me through my Linkdn or contact info on my resume. We
            can talk about new idea's, make revelutionary apps, or talk about
            Batman
            <img
              className="Batman"
              src="https://i.imgur.com/0sY7TDw.png"
              alt="Batman"
            ></img>
            .
          </p>
        </div>
        <div className="ContactLinks">
          <button className="LinkedinLink" onClick={handleClick}>
            Linkedin
          </button>
          <button className="ResumeLink" onClick={handleClick2}>
            Resume
          </button>
        </div>
        <div className="FormDiv">
          <form ref={form} onSubmit={sendEmail} className="Form">
            <input
              type="text"
              className="FormName"
              placeholder="Name"
              name="name"
              id="name"
            />
            <input
              type="text"
              className="FormEmail"
              placeholder="Email"
              name="email"
              id="email"
            />
            <textarea
              type="text"
              className="FormMessage"
              placeholder="Message"
              name="message"
              id="message"
              cols="50"
              rows="7"
            ></textarea>
            <button className="FormButton">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

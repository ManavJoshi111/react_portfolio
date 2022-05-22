import React from "react";
import Footer from "./Footer";
import "./contact.css";
import emailjs from "emailjs-com";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fade from "react-reveal/Fade";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kl0xr6z",
        "template_8nkqrlq",
        e.target,
        "EOC6wzEEcUdnEgsyi"
      )
      .then((res) => {
        alert("Your message has been sent successfully...!");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Fade bottom>
        <center>
          <div className="container-fluid mt-3 flex-wrap d-flex flex-column-reverse flex-md-row">
            <div className="leftcontainer container-fluid d-flex flex-column justify-content-start align-items-start ">
              <h2 className="hey text-justify display-5 mt-2">Get In Touch</h2>
              <h3 className="heading mt-2">Contact</h3>
              <a href="tel:+919157441707" className="number ml-3">
                <p>+91 9157441707</p>
              </a>
              <br />
              <h3 className="heading">Email</h3>
              <a href="mailto:manavjoshi154@gmail.com" className="number">
                <p>manavjoshi154@gmail.com</p>
              </a>
              <br />
              <h3 className="heading">Location</h3>
              <p className="number">29,Saraswati Shantinagar Society, Idar</p>
              <br />
              <div className="d-flex justify-content-center align-items-center flex-row flex-md-row align-self-center mb-3">
                <a
                  href="https://github.com/ManavJoshi111"
                  className="iconlink"
                  target="_blank"
                >
                  <GitHubIcon className="icon mx-3" />
                </a>
                <a
                  href="https://twitter.com/Man___111"
                  className="iconlink"
                  target="_blank"
                >
                  <TwitterIcon className="icon mx-3" />
                </a>
                <a
                  href="https://www.instagram.com/man_joshi_111/"
                  className="iconlink"
                  target="_blank"
                >
                  <InstagramIcon className="icon mx-3" />
                </a>
                <a
                  href="https://m.facebook.com/profile.php?id=100070915911380&refsrc=deprecated&_rdr"
                  className="iconlink"
                  target="_blank"
                >
                  <FacebookIcon className="icon mx-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manav-joshi-9a284b20b/"
                  className="iconlink"
                  target="_blank"
                >
                  <LinkedInIcon className="icon mx-3" />
                </a>
              </div>
            </div>
            <div className="rightcontainer">
              <h2 className="hey text-justify display-5 mt-2">Contact Me</h2>
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="" className="mt-2 h6">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="name"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="" className="mt-2 float-left ml-2 h6">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    name="useremail"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="" className="mt-2 float-left h6">
                    Message
                  </label>
                  <input
                    type="textarea"
                    className="form-control"
                    id=""
                    name="message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4 submitbtn mb-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </center>
        <Footer />
      </Fade>
    </>
  );
};

export default Contact;

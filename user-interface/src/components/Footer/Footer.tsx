import { FooterProps, useFooter } from "./useFooter";
import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  // FaWhatsapp,
} from "react-icons/fa";
// import { CiInstagram } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Footer: React.FC<FooterProps> = (props) => {
  const { currentYear, data } = useFooter(props);
  // console.log("Data from Footer:", data);
  const footer = data.contactUs[0];

  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {currentYear}. All rights reserved by{" "}
          <a
            href="https://www.linkedin.com/in/chaker-yaakoub/"
            className="copyright-link"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Chaker Yaakoub{" "}
          </a>
        </p>

        <ul className="social-list">
          <li>
            <a
              href={footer.linkedin ? footer.linkedin : "www.linkedin.com"}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="react-icon" />
            </a>
          </li>

          <li>
            <a
              href={footer.facebook}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="react-icon" />
            </a>
          </li>

          <li>
            <a
              href={footer.twitter}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="react-icon" />
            </a>
          </li>

          <li>
            <a
              href={footer.instagram}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              {/* <CiInstagram className="react-icon" /> */}
              <AiFillInstagram className="react-icon" />
            </a>
          </li>

          <li>
            <a
              href={`https://wa.me/${footer.whatsapp}?text=Hello,%20I'm%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20details%3F`}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FaWhatsapp className="react-icon" />  */}
              <RiWhatsappFill className="react-icon" />
            </a>
          </li>

          <li>
            <a
              href={footer.tiktok}
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaTiktok className="react-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

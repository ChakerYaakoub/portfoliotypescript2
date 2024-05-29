import React from "react";
import { ContactUsProps, useContactUs } from "./useContactUs";
import "./ContactUs.css";
import { NavItemsEnum } from "../../../utils/navItems";
import {
  IoCallOutline,
  IoGlobeOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
// import { IoMdArrowRoundForward } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

const ContactUs: React.FC<ContactUsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data, form, sendEmail } = useContactUs(props);
  // console.log("Data from ContactUs:", data);
  const contactUs = data.contactUs[0];
  return (
    <>
      <section
        className="section contact"
        id={NavItemsEnum.ContactUs}
        aria-label="contact"
      >
        <div className="container">
          <div className="contact-content">
            <p className="section-subtitle">Contact</p>

            <h2 className="h2 section-title">Get In Touch</h2>

            {/* <p className="section-text">
              {contactUs.contactDetails ? (
                contactUs.contactDetails
              ) : (
                <>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </>
              )}
            </p> */}

            <ul className="contact-list">
              {/* <a href="https://wa.me/+96170178399?text=Hello%20there!">
                Message us on WhatsApp
              </a> */}

              <li className="contact-item">
                <IoLocationOutline className="react-icon" />
                <address className="contact-link">{contactUs.location}</address>
              </li>

              <li className="contact-item">
                <MdOutlineWhatsapp className="react-icon" />
                <a
                  href={`https://wa.me/${contactUs.whatsapp}?text=Hello,%20I'm%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20details%3F`}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li className="contact-item">
                <IoCallOutline className="react-icon" />

                <a
                  href={`tel:${contactUs.telephone}`}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  +961 70 178 399
                </a>
              </li>

              <li className="contact-item">
                <IoMailOutline className="react-icon" />

                <a
                  href={`mailto:${contactUs.email}`}
                  target="_blank"
                  className="contact-link"
                  rel="noreferrer"
                >
                  {contactUs.email}
                </a>
              </li>

              <li className="contact-item">
                <IoGlobeOutline className="react-icon" />

                <a
                  href={contactUs.website}
                  target="_blank"
                  className="contact-link"
                  rel="noreferrer"
                >
                  {/* www.chaker.personal.training.com */}
                  {contactUs.website}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <br />
            <p className="section-text">
              {contactUs.contactDetails ? (
                contactUs.contactDetails
              ) : (
                <>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </>
              )}
            </p>
            <br />
            {/*  @ts-ignore */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input
                type="text"
                name="from_name"
                aria-label="name"
                placeholder="Name"
                required
                className="input-field"
              />
              <input
                type="tel"
                name="from_tel"
                aria-label="telephone"
                placeholder="Telephone"
                required
                className="input-field"
              />

              <input
                type="email"
                name="from_email"
                aria-label="email"
                placeholder="Email"
                required
                className="input-field"
              />

              <textarea
                name="message"
                aria-label="message"
                placeholder="Message"
                required
                className="input-field"
              ></textarea>

              <button type="submit" className="submit-btn">
                <span className="span">Send Message</span>

                <BiMailSend className="react-icon" />
              </button>
            </form>
            {/* <div className="VideoTest">
            <video autoPlay loop muted playsInline>
              <source src={data.userInfo[0].logoPath2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

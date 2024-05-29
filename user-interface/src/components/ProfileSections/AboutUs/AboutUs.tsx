import React from "react";
import { AboutUsProps, useAboutUs } from "./useAboutUs";
import "./AboutUs.css";
import { NavItemsEnum } from "../../../utils/navItems";

const AboutUs: React.FC<AboutUsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data } = useAboutUs(props);

  const aboutUs = data.aboutUs[0].about;

  return (
    <>
      <section
        className="section "
        id={NavItemsEnum.AboutUs}
        aria-label="about"
      >
        <div className="container">
          <p className="section-subtitle">About us </p>

          <h2 className="h2 section-title"> Get to Know Us</h2>

          <div className="about-us" id="about-us">
            <p>{aboutUs}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

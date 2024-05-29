import React from "react";
import { ServicesProps, useServices } from "./useServices";
import "./Services.css";
import { NavItemsEnum } from "../../../utils/navItems";
import { IoBarbellOutline } from "react-icons/io5";

const Services: React.FC<ServicesProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data, handleButtonClick } = useServices(props);

  const services = data.services[0];
  return (
    <>
      <section
        className="section services"
        id={NavItemsEnum.Services}
        aria-label="Solutions"
      >
        <div className="container">
          <div className="services-content">
            <p className="section-subtitle">Tailored Packages</p>
            <h2 className="h2 section-title">Personalized Solutions</h2>
            <p className="section-text">{services.brief}</p>
            <br />

            <ul id="packages">
              {services.services.map((service, index) => (
                <li key={index}>
                  <button
                    className="cssbuttons-io-button"
                    // onclick="sendWhatsAppMessage('Nutrition Plan')"
                    onClick={() => handleButtonClick(service)}
                  >
                    <div> {service}</div>

                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ul id="session" className="services-list">
            {services.personalizedSolutions.map((solution, index) => (
              <li data-package={solution} key={index}>
                <div
                  className="services-card"
                  // onclick="sendWhatsAppMessage('1 PT Session')"
                  onClick={() => handleButtonClick(solution)}
                >
                  {/* <ion-icon name="barbell-outline" aria-hidden="true"></ion-icon> */}
                  <IoBarbellOutline className="react-icon" />

                  <h3 className="card-title"> {solution}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;

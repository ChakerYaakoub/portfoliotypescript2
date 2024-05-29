import React from "react";
import "./WorkspaceDescriptions.css";
import {
  WorkspaceDescriptionsProps,
  useWorkspaceDescriptions,
} from "./useWorkspaceDescriptions";
import { NavItemsEnum } from "../../../utils/navItems";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WorkspaceDescriptions: React.FC<WorkspaceDescriptionsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data } = useWorkspaceDescriptions(props);
  const workspaceDescriptions = data.workspaceDescriptions;
  // console.log("Data from WorkspaceDescriptions:", data);
  return (
    <>
      <section
        className="section portfolio"
        id={NavItemsEnum.WorkspaceDescriptions}
        aria-label="portfolio"
      >
        <div className="container">
          <p className="section-subtitle">Overview</p>

          <h2 className="h2 section-title">workspace description : </h2>

          <ul className="has-scrollbar">
            {workspaceDescriptions.map((workspaceDescription, index) => (
              <li className="scrollbar-item" key={index}>
                <div className="card">
                  <figure
                    className="card-banner img-holder"
                    // style={{ --width: 600, --height: 675 }}
                  >
                    <img
                      src={workspaceDescription.WorkspacePhoto}
                      width="600"
                      height="675"
                      loading="lazy"
                      alt="Magic Art"
                      className="img-cover saturate"
                    />
                  </figure>

                  <div className="card-content">
                    {/* <ion-icon name="arrow-forward-outline"
                      aria-hidden="true"></ion-icon> */}
                    <Link to={`workspaceDescription/${index + 1}`}>
                      <IoArrowForwardOutline className="react-icon" />
                    </Link>

                    <h3 className="h3 card-title">
                      <Link to={`workspaceDescription/${index + 1}`}>
                        {workspaceDescription.title}
                      </Link>
                    </h3>

                    <p className="card-text">
                      {workspaceDescription.briefDescription}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkspaceDescriptions;

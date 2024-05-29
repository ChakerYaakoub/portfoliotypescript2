import React from "react";
import "./WorkingPeriods.css";
import { WorkingPeriodsProps, useWorkingPeriods } from "./useWorkingPeriods";
import { NavItemsEnum } from "../../../utils/navItems";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkingPeriods: React.FC<WorkingPeriodsProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data, formatDate } = useWorkingPeriods(props);

  const workingPeriods = data.workingPeriods;

  return (
    <>
      <section
        className="section timeline"
        id={NavItemsEnum.WorkingPeriods}
        aria-label="timeline"
      >
        <div className="container">
          <p className="section-subtitle">Timeline</p>

          <h2 className="h2 section-title ">Working Period</h2>

          <ul className="timeline-list">
            {workingPeriods.map((workingPeriod, index) => (
              <li className="timeline-item" key={index}>
                <h3 className="item-period">
                  {/* 2022 - Today */}
                  {/* have to fix this line i think it should be change the type of data to be not require  */}

                  {`${formatDate(workingPeriod.from)} - ${
                    workingPeriod.to ? formatDate(workingPeriod.to) : "Present"
                  }`}
                </h3>

                <p className="item-title">
                  <Link
                    to={`workingPeriod/${index + 1}`}
                    className="title-link"
                  >
                    <span className="focusText">{workingPeriod.title}</span>
                    <FaExternalLinkAlt
                      className="react-icon "
                      id="changeColorIcon"
                    />
                  </Link>
                </p>

                <p className="item-address">{workingPeriod.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkingPeriods;

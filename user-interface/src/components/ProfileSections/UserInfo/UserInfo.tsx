import { UserInfoProps, useUserInfo } from "./useUserInfo";
import "./UserInfo.css";
import { NavItemsEnum } from "../../../utils/navItems";
import { IoArrowDownOutline, IoArrowForwardOutline } from "react-icons/io5";
// import { FaArrowDown } from "react-icons/fa";

const UserInfo: React.FC<UserInfoProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { userInfo, yearsExperience, showVideo, opacity, photo2 } =
    useUserInfo(props);

  return (
    <>
      <section
        className="section hero"
        id={NavItemsEnum.UserInfo}
        aria-label="hero"
      >
        <div className="container">
          <figure className="hero-banner img-holder-Home has-before">
            {showVideo ? (
              // <video
              //   autoPlay
              //   loop
              //   muted
              //   playsInline
              //   className="img-cover"
              //   src={userInfo.logoPath2}
              //   style={{ opacity: opacity }}
              // />
              <img
                src={photo2 || ""}
                width="640"
                height="840"
                alt={userInfo.lastName || ""}
                className="img-cover"
                style={{ opacity: opacity }}
              />
            ) : (
              <img
                src={userInfo.profileImgPath || ""}
                width="640"
                height="840"
                alt={userInfo.lastName || ""}
                className="img-cover"
                style={{ opacity: opacity }}
              />
            )}
          </figure>

          <div className="hero-content">
            <p className="section-subtitle">
              {userInfo.name} {userInfo.lastName}
            </p>
            <h1 className="h1 hero-title">{userInfo.workDomain}</h1>
            <h4>{userInfo.about}</h4> <br />
            {/* services */}
            <ul className="hero-list">
              {userInfo.services.map((service, index) => (
                <li key={index}>
                  <a href={`#${NavItemsEnum.Services}`} className="list-link">
                    <span className="span focusText">{service}</span>
                    {/* <ion-icon name="arrow-forward-outline"
                      aria-hidden="true"></ion-icon> */}

                    <IoArrowForwardOutline className="react-icon" />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="exp-list">
              <li className="list-item">
                <strong className="strong">{yearsExperience}+</strong>

                <span className="span">
                  Years of
                  <br />
                  Experience
                </span>
              </li>

              <li className="list-item">
                <strong className="strong">{userInfo.clientsNumber}+</strong>

                <span className="span">
                  Happy
                  <br />
                  clients
                </span>
              </li>
            </ul>
            <a
              href={`#${NavItemsEnum.WorkspaceDescriptions}`}
              className="slide-down-btn"
              aria-label="scroll down"
            >
              <IoArrowDownOutline aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfo;

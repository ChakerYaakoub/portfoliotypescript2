import React from "react";
import "./Home.css";
import { useHome, HomeProps } from "./useHome";
import {
  AboutUs,
  ContactUs,
  Services,
  Skills,
  UserInfo,
  WorkingPeriods,
  WorkspaceDescriptions,
} from "../../components";
import { UserData } from "../../models/UserData";

const Home: React.FC<HomeProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const { data } = useHome(props);

  const dataProfile: UserData = data as unknown as UserData;

  // console.log("Data from Home:", dataProfile);
  return (
    <article>
      <UserInfo data={dataProfile} />

      <WorkspaceDescriptions data={dataProfile} />

      <Skills data={dataProfile} />

      <WorkingPeriods data={dataProfile} />

      <AboutUs data={dataProfile} />

      <Services data={dataProfile} />

      <ContactUs data={dataProfile} />
    </article>
  );
};

export default Home;

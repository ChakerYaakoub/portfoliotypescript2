import { UserInfo , WorkspaceDescription  , WorkingPeriod ,SkillsInfo, AboutInfo ,ServicesInfo ,ContactInfo} from "./DefaultUserData";


  // Define the structure of your entire Redux state
  export interface UserData {
    userInfo: UserInfo[];
    workspaceDescriptions: WorkspaceDescription[];
    skills:SkillsInfo[]; 
    workingPeriods: WorkingPeriod[];
    aboutUs: AboutInfo[];
    services: ServicesInfo[];
    contactUs: ContactInfo[];
  }

  export type DocData = UserInfo | WorkspaceDescription | SkillsInfo | WorkingPeriod | AboutInfo | ServicesInfo | ContactInfo;
  

  
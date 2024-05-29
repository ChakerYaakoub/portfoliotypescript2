import { SkillsInfo, UserInfo, WorkspaceDescription ,WorkingPeriod ,AboutInfo ,ServicesInfo ,ContactInfo } from "./DefaultUserData";

export type CollectionData = 
| { info: UserInfo }
| WorkspaceDescription[]
| { skillsInfo: SkillsInfo}
| { [key: string]: WorkingPeriod }
| { aboutInfo: AboutInfo }
| { servicesInfo: ServicesInfo }
| { contactInfo: ContactInfo };
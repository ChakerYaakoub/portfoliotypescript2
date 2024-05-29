// Define TypeScript Interfaces
export interface UserInfo {
  id?: string;
    name: string;
    lastName: string;
    middleName: string;
    specializations: string[];
    workDomain: string;
    about: string;
    services: string[];
    profileImgPath: string;
    logoPath: string;
    logoPath2: string;
    yearsExperience: number;
    clientsNumber: number;
    themeColor?: string;
  }
  
  export interface WorkspaceDescription {
    id?: string;
    WorkspacePhoto: string;
    title: string;
    briefDescription: string;
    description: string;
  }
  
  export interface Skill {
    id?: string;
    name: string;
    percentage: number;
  }
  
  export interface SkillsInfo {
    id?: string;
    resume: string;
    profileImgPath2: string;
    skills: Skill[];
  }
  
  export interface WorkingPeriod {
    id?: string;
    title: string;
    location: string;
    briefDescription: string;
    description: string;
    from: string;
    to?: string;
  }
  
  export interface AboutInfo {
    id?: string;
    about: string;
  }
  
  export interface ServicesInfo {
    id?: string;
    brief: string;
    services: string[];
    personalizedSolutions: string[];
  }
  
  export interface ContactInfo {
    id?: string;
    location: string;
    telephone: string;
    whatsapp: string;
    tiktok: string;
    twitter: string;
    facebook: string;
    instagram: string;
    email: string;
    website: string;
    contactDetails ?: string;
    linkedin?: string;
  }
  
  export interface  DefaultUserData{
    userInfo: {
      info: UserInfo;
    };
    workspaceDescriptions: WorkspaceDescription[];
    skills: {
      skillsInfo: SkillsInfo;
    };
    workingPeriods: {
      [key: string]: WorkingPeriod;
    };
    aboutUs: {
      aboutInfo: AboutInfo;
    };
    services: {
      servicesInfo: ServicesInfo;
    };
    contactUs: {
      contactInfo: ContactInfo;
    };
  }
  
  export interface RootData {
    dataUser: DefaultUserData;
  }


  

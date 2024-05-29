import { RootData } from "../models/DefaultUserData";
// Import the file
// Import the photos
import WorkspacePhoto1 from '../assets/WorkspacePhoto1.webp';
import WorkspacePhoto2 from '../assets/WorkspacePhoto2.png';
import WorkspacePhoto3 from '../assets/WorkspacePhoto3.webp';
import WorkspacePhoto4 from '../assets/WorkspacePhoto4.jpg';
// import logoPath from '../assets/logoPath.jpg'; 
import logoPath from '../assets/logoPath.png'; 
// import logoPath2 from '../assets/logoPath.jpg'; 
import logoPath2 from '../assets/logoPath2.mp4';
import profileImgPath from '../assets/profileImgPath.jpg';
import profileImgPath2 from '../assets/profileImgPath2.jpg'; 
import { uploadImageToStorage } from "./dataCreate";

// Now you can use the `imageFile` variable as a file in your code



  // Define the Constant Variable with the Data
  const createDataUserDefault = async (): Promise<RootData> => {
    return {
    dataUser: {
      userInfo: {
        info: {
          name: "Chaker",
          lastName: "Yaakoub",
          middleName: "Ayoub",
          specializations: ["Specialization 1", "Specialization 2"],
          workDomain: "Work Domain",
          about: "About John Doe",
          services: ["Service 1", "Service 2"],
          profileImgPath: await uploadImageToStorage(profileImgPath , "profileImgPath") ,
          logoPath:  await uploadImageToStorage(logoPath , "logoPath"),
          logoPath2:  await uploadImageToStorage(logoPath2 ,  "logoPath2"),
          yearsExperience: 2010,
          clientsNumber: 100,
          themeColor: "hsl(10, 100%, 57%)",
        },
      },
      workspaceDescriptions: [
        {   
          WorkspacePhoto:  await uploadImageToStorage(WorkspacePhoto1 ,   "WorkspacePhoto1"),
          title: "Workspace Title 1",
          briefDescription: "Brief description of workspace 1",
          description: "Full description of workspace 1",
        },
        {
          WorkspacePhoto: await uploadImageToStorage(WorkspacePhoto2 ,  "WorkspacePhoto2"),
          title: "Workspace Title 2",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
        },
        {
          WorkspacePhoto: await uploadImageToStorage(WorkspacePhoto3 , "WorkspacePhoto3"),
          title: "Workspace Title 3",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
        },
        {
          WorkspacePhoto: await uploadImageToStorage(WorkspacePhoto4 , "WorkspacePhoto4"),
          title: "Workspace Title 4",
          briefDescription: "Brief description of workspace 2",
          description: "Full description of workspace 2",
        },
      ],
      skills: {
        skillsInfo: {
          resume: "Resume text",
          profileImgPath2: await uploadImageToStorage(profileImgPath2 , "profileImgPath2"),
          skills: [
            {
              name: "Skill 1",
              percentage: 80,
            },
            {
              name: "Skill 2",
              percentage: 90,
            },
            {
              name: "Skill 3",
              percentage: 90,
            },
          ],
        },
      },
      workingPeriods: {
        periodInfo1: {
          title: "Work Title 1",
          location: "Work Location",
          briefDescription: "Brief description 1",
          description: "Work Description 1",
          from: "2018-02-10T00:00:00.000Z",
        },
        periodInfo2: {
          title: "Work Title 2",
          location: "Work Location",
          briefDescription: "Brief description 2",
          description: "Work Description 2",
          from: "2018-02-10T00:00:00.000Z",
          to: "2022-12-31T00:00:00.000Z",
        },
        periodInfo3: {
          title: "Work Title 3",
          location: "Work Location",
          briefDescription: "Brief description 3",
          description: "Work Description 2",
          from: "2018-02-10T00:00:00.000Z",
          to: "2022-12-31T00:00:00.000Z",
        },
      },
      aboutUs: {
        aboutInfo: {
          about: "About us description",
        },
      },
      services: {
        servicesInfo: {
          brief: "Services brief description",
          services: ["Service A", "Service B", "Service C"],
          personalizedSolutions: ["Solution 1", "Solution 2", "Solution 3"],
        },
      },
      contactUs: {
        contactInfo: {
          location: "Location",
          telephone: "123456789",
          whatsapp: "123456789",
          tiktok: "tiktok.com",
          twitter: "twitter.com",
          facebook: "facebook.com",
          instagram: "instagram.com",
          email: "chakeryb.pc@gmail.com",
          website: "www.example.com",
          linkedin: "www.linkedin.com",
          contactDetails: "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday",
        },
      },
    },
  } };


        
export default createDataUserDefault;
  
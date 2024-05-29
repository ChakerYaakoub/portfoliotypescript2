import { useEffect, useState } from "react";
import { UserData } from "../../../models/UserData"

export interface UserInfoProps {
  data :  UserData
}

export const useUserInfo = (props: UserInfoProps) => {

   // console.log("Data from UserInfo:", data);
   const userInfo = props.data.userInfo[0];
   const yearsExperience = new Date().getFullYear() - userInfo.yearsExperience;
   const photo2 = props.data.skills[0].profileImgPath2;
 
   // State to control image/video switching
   const [showVideo, setShowVideo] = useState(true);
   const [opacity, setOpacity] = useState(1);
 
   useEffect(() => {
     // Toggle between video and image every 5 seconds
     const intervalId = setInterval(() => {
       // Fade out the current image/video
       setOpacity(0.4);
       // Wait for the fade-out transition to complete
       setTimeout(() => {
         // Toggle between image and video
         setShowVideo((prevShowVideo) => !prevShowVideo);
         // Fade in the new image/video
         setOpacity(1);
       }, 200); // Wait for 500ms for the fade-out transition to complete
     }, 5000); // Switch every 5 seconds
 
     return () => clearInterval(intervalId);
   }, []);

  return { ...props , userInfo, yearsExperience, showVideo, opacity , photo2}
}
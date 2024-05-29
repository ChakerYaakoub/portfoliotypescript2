import { UserData } from "../../../models/UserData"

export interface ServicesProps {
  data : UserData
}

export const useServices = (props: ServicesProps) => {

  const handleButtonClick = (text : string) => { 
    console.log("Button  : " + text)
  }

  return { ...props   , handleButtonClick  }
}
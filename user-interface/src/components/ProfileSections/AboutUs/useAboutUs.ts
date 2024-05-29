import { UserData } from "../../../models/UserData"

export interface AboutUsProps {
  data : UserData
}

export const useAboutUs = (props: AboutUsProps) => {

  return { ...props     }
}
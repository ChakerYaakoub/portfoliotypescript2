import { UserData } from "../../models/UserData";
import portfolio from "../../assets/potfolio.png"

export interface HeadManagerProps {
  data?: UserData;
}

export const useHeadManager = (props: HeadManagerProps) => {
    const title = props.data?.userInfo[0].workDomain|| "portfolio";
    const favicon =  props.data?.userInfo[0].logoPath || portfolio;
    const metaDescription = props.data?.userInfo[0].workDomain || "portfolio";





  return { ...props  , title, favicon, metaDescription}
}
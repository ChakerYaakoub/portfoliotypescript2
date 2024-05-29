import { UserData } from "../../models/UserData";

export interface FooterProps {
  data: UserData;
}

export const useFooter = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return { ...props ,currentYear   }
}
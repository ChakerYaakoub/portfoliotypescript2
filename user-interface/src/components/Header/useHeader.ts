import { UserData } from "../../models/UserData";
import { navItems } from "../../utils/navItems";

export interface HeaderProps {
  data: UserData;
}

export const useHeader = (props: HeaderProps) => {
  const data = props.data;
  return { ...props, navItems, data };
};

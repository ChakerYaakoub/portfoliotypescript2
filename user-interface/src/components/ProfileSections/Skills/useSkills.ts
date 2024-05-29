import { UserData } from "../../../models/UserData"

export interface SkillsProps {
  data :  UserData
}

export const useSkills = (props: SkillsProps) => {

  return { ...props     }
}
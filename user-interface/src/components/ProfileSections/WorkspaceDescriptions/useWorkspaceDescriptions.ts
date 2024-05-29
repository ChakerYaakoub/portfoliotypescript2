import { UserData } from "../../../models/UserData"

export interface WorkspaceDescriptionsProps {
  data :  UserData
}

export const useWorkspaceDescriptions = (props: WorkspaceDescriptionsProps) => {

  return { ...props     }
}
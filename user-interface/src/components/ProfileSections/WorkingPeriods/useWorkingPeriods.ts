import { UserData } from "../../../models/UserData"

export interface WorkingPeriodsProps {
  data :  UserData
}

export const useWorkingPeriods = (props: WorkingPeriodsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  };

  return { ...props , formatDate    }
}
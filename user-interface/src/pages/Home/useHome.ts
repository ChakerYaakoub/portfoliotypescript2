import { useDispatch, useSelector } from "react-redux";
import { ReducerData } from "../../reducers";
import { useEffect } from "react";
import { fetchDataAndStoreInRedux } from "../../reducers/dataReducer";

export interface HomeProps {}

export const useHome = (props: HomeProps) => {

  const dispatch = useDispatch();
  const data = useSelector((state: ReducerData) => state.data);

  useEffect(() => {
    dispatch(fetchDataAndStoreInRedux() as any);
  }, [dispatch]);

  return { ...props , data    }
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAndStoreInRedux } from "./reducers/dataReducer";
import createDataInFirestore from "./utils/dataCreate";
import { ReducerData } from "./reducers";
import { UserData } from "./models/UserData";



const useApp = () => {
  const dispatch = useDispatch();
  const data  = useSelector((state: ReducerData) => state.data) as unknown as UserData;

  // create data in firestore if not exists
  useEffect(() => {
    createDataInFirestore();
  }, []); // runs only once

  // get data from firestore and store in redux
  useEffect(() => {
    dispatch(fetchDataAndStoreInRedux() as any);
  }, [dispatch]);

  // test data from the main and change the theme color
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      console.log("Data from the main:", data);
      // @ts-ignore
      if (data.userInfo[0].themeColor) {
        // @ts-ignore
        document.documentElement.style.setProperty(
          "--theme-color",
          // @ts-ignore
          data.userInfo[0].themeColor
        );
      }
    }
  }, [data]);

  return {  data };
};

export default useApp;

import { LoadingProps } from "./useLoading";
import "./Loading.css";
import HeadManager from "../HeadManager/HeadManager";

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div className="my-loader-container">
      <HeadManager />
      <div className="my-loader"></div>
    </div>
  );
};

export default Loading;

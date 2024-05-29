import { Helmet } from "react-helmet";
import { HeadManagerProps, useHeadManager } from "./useHeadManager";

const HeadManager: React.FC<HeadManagerProps> = (props) => {
  const { title, favicon, metaDescription } = useHeadManager(props);
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={favicon} />
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default HeadManager;

import FailedToLoad from "./failedToLoad";
import LoadingData from "./loadingData";

const LoadedComponent = ({
  data,
  error,
  component
}: {
  data: any;
  error: any;
  component: (data) => JSX.Element;
}) => {
  if (error) {
    console.error(error)
    return <FailedToLoad />;
  }
  if (!data) return <LoadingData />;

  return component({ data });
};

export default LoadedComponent;

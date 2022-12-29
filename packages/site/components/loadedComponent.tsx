const LoadedComponent = ({
  data,
  error,
  component
}: {
  data: any;
  error: any;
  component: (data) => JSX.Element;
}) => {
  if (error) return <h3>Failed to load data</h3>;
  if (!data) return <h3>Loading...</h3>;

  return component({ data });
};

export default LoadedComponent;

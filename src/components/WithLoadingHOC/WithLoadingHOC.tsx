interface WithLoadingProps {
  loading: boolean;
}

// This function takes a component...
const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> =>
  ({ loading, ...props }: P & WithLoadingProps) =>
    loading ? <div>Loading...</div> : <Component {...(props as P)} />;

export default withLoading;

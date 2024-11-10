/* A component rendering its children in a grid */
export const MovieCardGrid = ({ children }: React.PropsWithChildren) => {
  return <div className="flex flex-wrap gap-4 max-w-m">{children}</div>;
  /* TODO: Actually do this in a grid */
};

export default MovieCardGrid;

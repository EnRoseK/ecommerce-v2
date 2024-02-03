interface NoLayoutProps extends React.PropsWithChildren {}

export const NoLayout: React.FC<NoLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

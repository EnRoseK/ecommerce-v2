interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Component: React.FC<ComponentProps> = ({ as: Tag = 'div', ...rest }) => {
  return <Tag {...rest} />;
};

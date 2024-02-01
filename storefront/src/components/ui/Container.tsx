import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.PropsWithChildren {
  el?: HTMLElement;
  classNames?: string;
}

export const Container: React.FC<ContainerProps> = ({ el = 'div', classNames, children }) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component
      className={twMerge('mx-auto max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20', classNames)}
    >
      {children}
    </Component>
  );
};

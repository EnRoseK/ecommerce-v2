import { Drawer } from '@/components';
import { useAnimation, useStopScroll } from '@/hooks';
import { createContext, useState } from 'react';

interface DrawerProviderProps extends React.PropsWithChildren {}

type DrawerContextType = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setPosition: React.Dispatch<React.SetStateAction<'right' | 'left'>>;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

export const DrawerContext = createContext<DrawerContextType>({} as DrawerContextType);

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [renderDrawer, onAnimationEnd] = useAnimation(openDrawer);
  const [position, setPosition] = useState<'right' | 'left'>('right');
  const [content, setContent] = useState<React.ReactNode>(<></>);

  const value = { setOpenDrawer, setPosition, setContent };

  useStopScroll(openDrawer);

  return (
    <DrawerContext.Provider value={value}>
      {children}
      {renderDrawer && (
        <Drawer
          onAnimationEnd={onAnimationEnd}
          closeHandler={() => setOpenDrawer(false)}
          open={openDrawer}
          position={position}
        >
          {content}
        </Drawer>
      )}
    </DrawerContext.Provider>
  );
};

import { DrawerContext } from '@/providers';
import { useContext } from 'react';

export const useDrawer = () => {
  const ctx = useContext(DrawerContext);

  if (!ctx) {
    throw new Error('Context must be used inside provider!');
  }

  const { setContent, setOpenDrawer, setPosition } = ctx;

  const openDrawer = ({
    content,
    position,
  }: {
    content: React.ReactNode;
    position?: 'right' | 'left';
  }) => {
    setPosition(position || 'right');
    setContent(content);
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return [openDrawer, closeDrawer] as const;
};

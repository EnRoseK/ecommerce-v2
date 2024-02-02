import { ModalContext } from '@/providers';
import { useContext } from 'react';

export const useModal = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error('Context must be used inside provider!');
  }

  const { setOpenModal, setContent, setClassName } = ctx;

  const openModal = ({ content, className }: { content: React.ReactNode; className?: string }) => {
    setContent(content);
    setClassName(className || '');
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setClassName('');
    setContent('');
  };

  return [openModal, closeModal] as const;
};

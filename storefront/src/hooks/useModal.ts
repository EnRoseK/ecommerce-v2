import { ModalContext } from '@/providers';
import { useContext } from 'react';

export const useModal = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error('Context must be used inside provider!');
  }

  const { setOpenModal, setContent } = ctx;

  const openModal = ({ content }: { content: React.ReactNode }) => {
    setContent(content);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setContent('');
  };

  return [openModal, closeModal] as const;
};

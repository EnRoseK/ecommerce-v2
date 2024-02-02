import { Modal } from '@/components';
import { useAnimation, useStopScroll } from '@/hooks';
import { PropsWithChildren, createContext, useState } from 'react';

interface ModalProviderProps extends PropsWithChildren {}

type ModalContextType = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [renderModal, onAnimationEnd] = useAnimation(openModal);
  const [content, setContent] = useState<React.ReactNode>(<></>);

  const value = { setOpenModal, setContent };

  useStopScroll(openModal);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {renderModal && (
        <Modal
          open={openModal}
          onAnimationEnd={onAnimationEnd}
          closeHandler={() => setOpenModal(false)}
        >
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

import { Modal } from '@/components';
import { useAnimation, useStopScroll } from '@/hooks';
import { PropsWithChildren, createContext, useState } from 'react';

interface ModalProviderProps extends PropsWithChildren {}

type ModalContextType = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  setClassName: React.Dispatch<React.SetStateAction<string>>;
};

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [renderModal, onAnimationEnd] = useAnimation(openModal);
  const [content, setContent] = useState<React.ReactNode>(<></>);
  const [className, setClassName] = useState<string>('');

  const value = { setOpenModal, setContent, setClassName };

  useStopScroll(openModal);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {renderModal && (
        <Modal
          open={openModal}
          onAnimationEnd={onAnimationEnd}
          closeHandler={() => setOpenModal(false)}
          className={className}
        >
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

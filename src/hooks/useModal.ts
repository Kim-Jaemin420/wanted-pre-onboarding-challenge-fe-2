import { ModalSetterContext, ModalStateContext } from '@/context/modal';
import { useContext } from 'react';

const useModal = () => {
  const { isShow, message } = useContext(ModalStateContext);
  const { setIsShow, setMessage } = useContext(ModalSetterContext);

  const openModal = () => setIsShow(true);

  const closeModal = () => setIsShow(false);

  const setModalMessage = (message: string) => setMessage(message);

  return { isShow, openModal, closeModal, message, setModalMessage };
};

export default useModal;

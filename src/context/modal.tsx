import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalSetter {
  setIsShow: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<string>;
}

const ModalStateContext = createContext({
  isShow: false,
  message: '',
});

const ModalSetterContext = createContext<ModalSetter>({
  setIsShow: () => {},
  setMessage: (message: string) => {},
});

const ModalProvider = ({ children }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <ModalSetterContext.Provider value={{ setIsShow, setMessage }}>
      <ModalStateContext.Provider value={{ isShow, message }}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
};

export { ModalSetterContext, ModalStateContext, ModalProvider };

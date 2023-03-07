import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { useModal } from '@/hooks';
import { theme } from '@/styles';
import Dinoteng from '@/public/assets/img/dinoteng.svg';
import Portal from './Portal';

interface Props {
  handleClickCloseModal?: () => void;
  children?: ReactNode;
}

function Modal({ handleClickCloseModal, children }: Props) {
  const { isShow, message, closeModal, setModalMessage } = useModal();

  const handleClickClose = () => {
    closeModal();
    setModalMessage('');

    if (handleClickCloseModal) handleClickCloseModal();
  };

  return (
    <Portal portalId="portal">
      {isShow && (
        <div
          css={css`
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.1);
            z-index: 9999;
          `}
          onClick={handleClickClose}
        >
          <div
            css={css`
              width: 40rem;
              min-height: 30rem;
              height: fit-content;
              border-radius: 1.5rem;
              background-color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border: 0.1rem solid ${theme.colors.secondary};
            `}
          >
            <article>
              <main
                css={css`
                  height: 25rem;
                  display: flex;
                  flex-flow: column nowrap;
                  justify-content: center;
                  align-items: center;
                  overflow: auto;
                `}
              >
                <div
                  css={css`
                    width: 30rem;
                  `}
                >
                  <img
                    src={Dinoteng}
                    css={css`
                      max-width: 100%;
                      max-height: 100%;
                    `}
                  />
                </div>
                {message}
                {children}
              </main>
              <div
                css={css`
                  display: flex;
                  flex-flow: column wrap;
                  align-items: center;
                  justify-content: center;
                  margin-top: 0.5rem;
                `}
              >
                <Button
                  variant="outlined"
                  sx={{
                    'color': theme.colors.secondary,
                    'border': `0.1rem solid ${theme.colors.secondary}`,
                    '&:hover': {
                      border: `0.1rem solid ${theme.colors.secondary}`,
                      backgroundColor: '#fff2e5',
                    },
                  }}
                  onClick={handleClickClose}
                >
                  닫기
                </Button>
              </div>
            </article>
          </div>
        </div>
      )}
    </Portal>
  );
}

export default Modal;

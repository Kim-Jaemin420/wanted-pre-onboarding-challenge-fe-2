import { css } from '@emotion/react';
import { Button } from '@mui/material';
import Dinoteng from '@/public/assets/img/dinoteng.svg';

function Modal() {
  return (
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
        `}
      >
        <article>
          <main
            css={css`
              height: 25rem;
              display: flex;
              flex-flow: column wrap;
              justify-content: center;
              align-items: center;
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
            내용
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
            <Button variant="outlined">닫기</Button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Modal;

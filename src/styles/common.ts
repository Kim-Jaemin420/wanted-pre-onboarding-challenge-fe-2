import { css } from '@emotion/react';

export const a11yHidden = css`
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

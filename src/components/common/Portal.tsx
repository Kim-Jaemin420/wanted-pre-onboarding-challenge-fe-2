import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  portalId: string;
}

const createPortalElementAndAppendToBody = (portalId: string) => {
  const $portal = document.getElementById(portalId);

  if ($portal) return $portal as HTMLDivElement;

  const $newPortal = document.createElement('div');
  $newPortal.setAttribute('id', portalId);
  document.body.appendChild($newPortal);

  return $newPortal;
};

const Portal = ({ children, portalId = 'portal' }: Props) => {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setPortal(createPortalElementAndAppendToBody(portalId));

    return () => {
      createPortalElementAndAppendToBody(portalId)?.remove();
    };
  }, [portalId]);

  return portal ? createPortal(children, portal) : null;
};

export default Portal;

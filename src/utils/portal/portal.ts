import { ReactNode } from 'react';
import ReactDom from 'react-dom';

type ModalPortalProps = {
  children: ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el: HTMLElement = document.getElementById('modal')!;
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;

import React from "react";
import ReactDOM from "react-dom";

export interface IModal {
  open: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Modal = ({ children, open, onClose, className }: IModal) => {
  if (!open) return null;

  let portalDiv = document.getElementById("portal");


  return portalDiv
    ? ReactDOM.createPortal(
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba z-[1000]"
            onClick={onClose}
          />
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[1000] rounded-md ${className}`}
          >
            {children}
          </div>
        </>,
        portalDiv
      )
    : null;
};

export { Modal };

import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

const Modal = ({ children, open, onClose, className }: Props) => {
  if (!open) return null;

  let portalDiv = document.getElementById("portal");

  const handleButtonClose = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    onClose();
  };

  return portalDiv
    ? ReactDOM.createPortal(
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba z-[1000]"
            onClick={onClose}
          />
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-[1000] ${className}`}
          >
            <MdClose
              onClick={handleButtonClose}
              className="absolute top-2 right-2 cursor-pointer text-3xl"
            />
            {children}
          </div>
        </>,
        portalDiv
      )
    : null;
};

export { Modal };

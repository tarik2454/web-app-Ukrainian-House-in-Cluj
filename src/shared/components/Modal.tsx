import React, { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { SpriteSVG } from "../../assets/images/SpriteSVG";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string;
  children?: ReactNode;
  stylesContent?: string;
  stylesBackdrop?: string;
  stylesButtonClose?: string;
};

export default function Modal({
  isOpen,
  onClose,
  modalTitle,
  children,
  stylesContent,
  stylesBackdrop,
  stylesButtonClose,
}: ModalProps) {
  const modalRoot: Element | null = document.querySelector("#modal-root");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return modalRoot ? (
    createPortal(
      <>
        <div
          className={twMerge(
            "pointer-events-none invisible fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black-100 bg-opacity-50 opacity-0 transition-all duration-250",
            isOpen ? "pointer-events-auto visible opacity-100" : "",
            stylesBackdrop,
          )}
          onClick={handleBackdropClick}
        >
          <div
            className={twMerge(
              "my-auto w-[96%] max-w-[500px] scale-y-0 bg-white px-8 py-10 opacity-0 transition-all duration-250 dark:bg-dark-background",
              isOpen ? "scale-y-100 opacity-100" : "",
              stylesContent,
            )}
          >
            <button
              className={twMerge(
                "absolute right-0 top-0 z-30 p-1",
                stylesButtonClose,
              )}
              onClick={onClose}
            >
              <SpriteSVG name="close" />
            </button>
            <p className="mb-6 text-center font-inter-600 text-2xl font-semibold text-black-200 dark:text-dark-title">
              {modalTitle}
            </p>
            {children}
          </div>
        </div>
      </>,
      modalRoot,
    )
  ) : (
    <h2>Oops!!! We have some problem!!</h2>
  );
}

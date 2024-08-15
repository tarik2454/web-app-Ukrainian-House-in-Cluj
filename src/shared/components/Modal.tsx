import React, { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { SpriteSVG } from '../../img/SpriteSVG';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  stylesContent?: string;
  stylesBackdrop?: string;
  stylesButtonClose?: string;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  stylesContent,
  stylesBackdrop,
  stylesButtonClose,
}: ModalProps) {
  const modalRoot: Element | null = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return modalRoot ? (
    createPortal(
      <>
        {isOpen && (
          <div
            className={twMerge(
              'flex items-center justify-center bg-black-100 bg-opacity-50 fixed inset-0 z-50',
              stylesBackdrop
            )}
            onClick={handleBackdropClick}
          >
            <div
              className={twMerge(
                'w-full max-w-[500px] px-8 py-10 bg-white absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ',
                stylesContent
              )}
            >
              <button
                className={twMerge(
                  'p-1 absolute top-0 right-0 z-30',
                  stylesButtonClose
                )}
                onClick={onClose}
              >
                <SpriteSVG name="close" />
              </button>
              {children}
            </div>
          </div>
        )}
      </>,
      modalRoot
    )
  ) : (
    <h2>Oops!!! We have some problem!!</h2>
  );
}

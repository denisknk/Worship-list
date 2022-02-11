import React, { memo } from 'react';
import cn from 'classnames';

import { sizeType } from './modal.constants';
import { ModalSizeTypeKeys } from './modal.types';

import globalStyles from '../../assets/styles/global.module.css';
import styles from './modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  setClose: (value: false) => void;
  portalClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  size?: ModalSizeTypeKeys;
}

// eslint-disable-next-line react/display-name
export const Modal: React.FC<ModalProps> = memo(
  ({
    isOpen,
    setClose,
    portalClassName = '',
    contentClassName = '',
    children,
    size = 'medium'
  }: ModalProps) => {
    if (!isOpen) return null;

    const handleBackDropClick = () => setClose(false);

    const portalStyles = cn(styles.portalWrap, portalClassName);

    const contentStyles = cn(
      styles.modalContent,
      globalStyles.addScrollStyles,
      sizeType[size],
      contentClassName
    );

    return (
      <div className={portalStyles}>
        <div className={styles.backdrop} onClick={handleBackDropClick} />
        <div className={styles.scrollWrapper}>
          <div className={contentStyles}>{children}</div>
        </div>
      </div>
    );
  }
);

export default Modal;

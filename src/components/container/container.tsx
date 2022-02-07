import React from 'react';

import styles from './container.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export const Container: React.FC<Props> = ({
  children,
  contentClassName = '',
  className = ''
}: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.content} ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default Container;

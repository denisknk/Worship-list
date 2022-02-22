import React from 'react';

type Props = {
  xmlns: string;
  fill: string;
  className: string;
};

const Logo: React.FC<Props> = ({ xmlns, fill, className }: Props) => (
  <svg xmlns={xmlns} fill={fill} className={className}></svg>
);

export default Logo;

import React, { ComponentProps } from 'react';

import styles from './styles.module.css';

interface ButtonProps extends ComponentProps<'button'> {}

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return <button className={`${styles.button} ${className || ''}`} {...rest} />;
};

export default Button;

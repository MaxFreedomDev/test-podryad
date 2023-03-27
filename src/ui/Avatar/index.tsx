import React from 'react';
import AlertIcon from '../../assets/img/alert.svg';

import styles from './styles.module.css';

interface Avatar {
  src?: string;
  alert?: boolean;
  onClick?: () => void;
}

const Avatar: React.FC<Avatar> = ({ src, alert = false, onClick }) => {
  return (
    <div className={styles.avatar_wrapper} onClick={onClick}>
      <div className={styles.avatar}>
        {src ? (
          <img className={styles.image} src={src} alt='avatar' />
        ) : (
          <div className={styles.empty}>A</div>
        )}
        {alert && <img className={styles.alert} src={AlertIcon} alt='alert' />}
      </div>
    </div>
  );
};

export default Avatar;

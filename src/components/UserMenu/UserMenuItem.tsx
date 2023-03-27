import React from 'react';
import AlertImg from '~/assets/img/alert.svg';

import styles from './styles.module.css';

interface UserMenuItemProps {
  label: string;
  count?: number;
  newCount?: number;
  alert?: boolean;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  label,
  count = 0,
  newCount = 0,
  alert = false,
}) => (
  <li>
    <a href='#'>
      {label}
      <div className={styles.counts}>
        {!!count && <span>{count}</span>}
        {!!newCount && <span className={styles.newCount}>+{newCount}</span>}
        {alert && <img className={styles.icon} src={AlertImg} alt='alert' />}
      </div>
    </a>
  </li>
);

export default UserMenuItem;

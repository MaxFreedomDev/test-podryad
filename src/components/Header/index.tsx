import React from 'react';
import styles from './styles.module.css';
import Account from '~/components/Account';
import Skeleton from '~/components/Skeleton';
import { Button } from '~/ui';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_content__skeleton}>
          <Skeleton.Logo />
          <Skeleton.Line />
        </div>
        <nav className={styles.header_content__navigation}>
          <li>
            <a href='#'>Доска заказов</a>
          </li>
          <li>
            <a href='#'>Тарифы</a>
          </li>
          <li>
            <a href='#'>Контакты</a>
          </li>
        </nav>
        <Button className={styles.button}>Разместить заказ</Button>
        <Account />
      </div>
    </header>
  );
};

export default Header;

import React, { PropsWithChildren } from 'react';

import styles from './styles.module.css';
import Header from '~/components/Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

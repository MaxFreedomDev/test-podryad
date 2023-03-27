import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '~/providers/storeProvider';
import Profile from '~/components/Profile';
import UserMenuItem from '~/components/UserMenu/UserMenuItem';

import styles from './styles.module.css';

interface UserMenuProps {
  toggle: (isOpen: boolean) => void;
  header: React.ReactNode;
}

const UserMenu: React.FC<UserMenuProps> = ({ toggle, header }) => {
  const {
    userInfo: { information },
  } = useStore();
  if (!information) return <div>Loading...</div>;
  return (
    <div className={styles.userMenu}>
      <div className={styles.profile}>{header}</div>
      <div className={styles.userMenu_rate}>
        <span>{information.rate.name}</span>
        {information.rate.isActive ? (
          <span>Активен до {information.rate.date}</span>
        ) : (
          <span>Неактивен</span>
        )}
      </div>
      <ul className={styles.userMenu_items}>
        <UserMenuItem label='Мои заказы' count={information.myOrders.length} />
        <UserMenuItem label='Исходящие отклики' count={information.outgoinResponses.length} />
        <UserMenuItem
          label='Входящие заказы'
          count={information.incomingOrders.length}
          newCount={information.incomingOrders.filter((o) => o.isNew).length}
        />
        <UserMenuItem label='Кабинет' />
        <UserMenuItem label='Электронные подписи' alert={information.electronicSignatures} />
        <UserMenuItem label='Выход' />
      </ul>
      <div className={styles.divider} />
      {information.users.map((user) => (
        <Profile
          key={user.id}
          className={styles.users_item}
          name={user.name}
          company={user.company}
        />
      ))}
    </div>
  );
};

export default observer(UserMenu);

import React, { useCallback, useState } from 'react';

import styles from './styles.module.css';
import { Popover } from '~/ui';
import { useStore } from '~/providers/storeProvider';
import UserMenu from '~/components/UserMenu';
import Profile from '~/components/Profile';

interface AccountProps {}
interface PropsContent {
  toggle: (isOpen: boolean) => void;
  header: React.ReactNode;
}

const Account: React.FC<AccountProps> = () => {
  const { userInfo } = useStore();
  const [isOpen, toggle] = useState(false);

  const onClick = useCallback(async () => {
    toggle((prevState) => {
      if (!prevState) {
        userInfo.fetchUserInformation();
      }
      return !prevState;
    });
  }, []);

  return (
    <>
      <Profile
        onClick={onClick}
        className={styles.account}
        alert
        name={userInfo.name}
        company={userInfo.company}
      >
        <Popover
          isOpen={isOpen}
          toggle={toggle}
          content={
            <UserMenu
              header={
                <Profile onClick={onClick} alert name={userInfo.name} company={userInfo.company} />
              }
              toggle={toggle}
            />
          }
        />
      </Profile>
    </>
  );
};

export default Account;

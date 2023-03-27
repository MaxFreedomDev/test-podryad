import React from 'react';
import { Avatar } from '~/ui';
import AvatarImg from '~/assets/img/Avatar.png';

import styles from './styles.module.css';

interface ProfileProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  alert?: boolean;
  company: string;
  name: string;
}

const Profile: React.FC<ProfileProps> = ({
  onClick,
  className,
  children,
  alert,
  name,
  company,
}) => (
  <div className={`${styles.profile} ${className || ''}`}>
    <Avatar src={AvatarImg} alert={alert} onClick={onClick} />
    <div className={styles.profile_info}>
      <span>{company}</span>
      <span>{name}</span>
    </div>
    {children}
  </div>
);
export default Profile;

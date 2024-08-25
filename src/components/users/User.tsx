import React from 'react';
import Link from 'next/link';
import styles from './User.module.scss';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserCardProps {
  user: User;
  isUserPage?: boolean;
}

const User: React.FC<UserCardProps> = ({ user, isUserPage = false }) => {

  const handleSaveUserId = () => sessionStorage.setItem('userId', String(user.id))

  return (
    <li className={styles.userCard}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>{user.email}</p>
      </div>
      {!isUserPage && (
        <Link href={`/users/${user.id}`} onClick={handleSaveUserId}>View Details</Link>
      )}
    </li>
  );
};

export default User;

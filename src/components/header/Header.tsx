import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { ILink } from '@/types/link';

const links: ILink[] = [
  {
    href: '/auth/login',
    title: 'Login',
  },
  {
    href: '/auth/signup',
    title: 'Sign Up',
  },
]

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map(({href, title}) => (
          <Link key={href} href={href} className={styles.link}>
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
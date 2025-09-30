import Link from 'next/link';
import css from './Header.module.css';
import '../../globals.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <Link href="/" aria-label="Home">
          NoteHub
        </Link>
        <nav>
          <ul className={css.navigation}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

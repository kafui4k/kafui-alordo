import Link from "next/link";

import styles from "./Navbar.component.module.css";

const NavBarComponent = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.innerHeader}> */}
      <input className={styles.sidemenu} type="checkbox" id="side-menu" />
      <label className={styles.hamb} htmlFor="side-menu">
        <span className={styles.hambline}></span>
      </label>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <a href="#">talks</a>
          </li>
          <li>
            <a href="#">thoughts</a>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default NavBarComponent;

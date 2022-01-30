import Link from "next/link";

import navStyles from "./navigation.module.scss";

const Header = () => {
  return (
    <nav className={navStyles.header}>
      <div className={navStyles.container}>
        <span className={navStyles.logo}>
          <Link href="/">
            Gastro
          </Link>
        </span>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Header;

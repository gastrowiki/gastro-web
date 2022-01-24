import Link from "next/link";

import navStyles from "./navigation.module.css";

const Header = () => {
  return (
    <nav className={navStyles.header}>
      <div className={navStyles.container}>
        <Link href="/">Gastro</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Header;

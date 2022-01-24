import Link from "next/link";

import navStyles from "./navigation.module.css";

const Footer = () => {
  return (
    <nav className={navStyles.footer}>
      <div className={navStyles.container}>
        ©{new Date().getFullYear()} Gastro Cooperative - a <Link href="https://goldengate.digital">Golden Gate Digital, LLC</Link> initiative
      </div>
    </nav>
  );
};

export default Footer;

import Link from "next/link";

import navStyles from "./navigation.module.scss";

const Footer = () => {
  return (
    <footer className={navStyles.footer}>
      <div className={navStyles.container}>
        ©{new Date().getFullYear()} Gastro Cooperative - a <Link href="https://goldengate.digital">Golden Gate Digital, LLC</Link> initiative
      </div>
    </footer>
  );
};

export default Footer;

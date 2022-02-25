import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import navStyles from "./navigation.module.scss";
import { useCurrentUser } from "auth";

const Header = () => {
  const { isLoggedIn, logout, user } = useCurrentUser();
  const [profileMenuActive, setProfileMenuActive] = useState(false);
  const router = useRouter();
  const avatarUrl = user.picture || "/images/profile.svg";

  useEffect(() => setProfileMenuActive(false), [router.asPath]);

  const handleLogout = () => {
    logout();
    setProfileMenuActive(false);
  };

  return (
    <>
      <nav className={navStyles.navigation}>
        <div className={navStyles.container}>
          <Link href="/">
            <a className={navStyles.logo}>Gastro</a>
          </Link>
          <div className={navStyles.profile}>
            {isLoggedIn ? (
              <div
                className={navStyles.avatarBtn}
                onClick={() => setProfileMenuActive(!profileMenuActive)}
              >
                <img src={avatarUrl} alt="User Avatar" />
              </div>
            ) : (
              <Link href="/login">
                <a>
                  <div className={navStyles.avatarBtn}>
                    <img src={avatarUrl} alt="User Avatar" />
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${navStyles.profileMenu} ${
          profileMenuActive ? navStyles.profileMenuActive : ""
        }`}
      >
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <a onClick={handleLogout}>Logout</a>
      </div>
    </>
  );
};

export default Header;

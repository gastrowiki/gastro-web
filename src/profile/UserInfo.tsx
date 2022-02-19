import Image from "next/image";

import { userCurrentUser } from "auth";
import styles from 'profile/profile.module.scss';

const UserInfo = () => {
  const { user } = userCurrentUser();
  return (
    <div>
      <div className={styles.byLine}>
        <figure className={styles.profileImage}>
          <Image src={user.picture || '/images/profile-placeholder.png'} width={75} height={75} />
        </figure>
        <h3>{user.given_name} {user.family_name}</h3>
      </div>
      <div>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;

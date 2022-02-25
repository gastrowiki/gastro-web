import { useState } from "react";
import Image from "next/image";

import { useCurrentUser } from "auth";
import styles from "profile/profile.module.scss";
import UpdateAvatarModal from "./UpdateAvatarModal";

const UserInfo = () => {
  const { user } = useCurrentUser();
  const [changeAvatarVisible, setChangeAvatarVisible] = useState(true);

  return (
    <div>
      <div className={styles.byLine}>
        <figure
          className={styles.profileImage}
          onClick={() => setChangeAvatarVisible(true)}
        >
          <Image
            src={user.picture || "/images/profile-placeholder.png"}
            width={75}
            height={75}
          />
        </figure>
        <h3>
          {user.given_name} {user.family_name}
        </h3>
      </div>
      <div>
        <p>{user.email}</p>
      </div>
      <UpdateAvatarModal
        isOpen={changeAvatarVisible}
        onClose={() => setChangeAvatarVisible(false)}
      />
    </div>
  );
};

export default UserInfo;

import React from "react";
import styles from "./UserPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "entites/store";
import HeaderAndBarLayout from "layouts/HeaderAndBarLayout";

const UserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.profile);

  return (
    <HeaderAndBarLayout>
      <div className={styles.userProfile}>
        <div className={styles.userAvatar}>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <div>No image</div>
          )}
          <div className={styles.userInfo}>
            <h2>{user?.displayName}</h2>
            <p>Student</p>
          </div>
        </div>

        <div className={styles.personalInfo}>
          <h1>Personal Info</h1>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Username</span>
            <h2 className={styles.changeBtn}>{user?.displayName}</h2>
          </div>

          <div className={styles.infoContainer}>
            <span className={styles.info}>Mail</span>
            <h2 className={styles.changeBtn}>
              {user?.email ? user?.email : <span>No email</span>}
            </h2>
          </div>
        </div>
      </div>
    </HeaderAndBarLayout>
  );
};

export default UserPage;

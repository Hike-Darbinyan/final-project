import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import SignInWithGoogle from "features/SignIn/SignInWithGoogle";
import SignInWithGitHub from "features/SignIn/SignInWithGithub";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import imgLeft from "../../../images/left.png";
import imgRight from "../../../images/right.png";
import trelloLogo from "../../../images/trello-logo.png";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const SignInWithEmailPass = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await navigate("/boards");

      await ((userCredential: any) => {
        console.log(userCredential);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.loginDiv}>
      <div className={styles.loginContainer}>
        <img
          src={trelloLogo}
          alt=""
          style={{ margin: "0 130px", width: "117,5px", height: "30px" }}
        />
        <div className={styles.loginToContinue}>
          <h4>Login to continue</h4>
        </div>
        <form>
          <input
            type="text"
            id="username"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className={styles.login}
            onClick={SignInWithEmailPass}
          >
            Continue
          </button>
        </form>
        <h4 className={styles.continuewith}>Or continue with:</h4>
        <div className={styles.authoriseDiv}>
          <SignInWithGoogle />
          <SignInWithGitHub />
        </div>
        <span className={styles.haveAnAcc}>
          Dont have an account?{" "}
          <Link to="/register">
            <span>Sign up</span>
          </Link>
        </span>
      </div>
      <img
        src={imgLeft}
        alt=""
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "300px",
          height: "360px",
        }}
      />
      <img
        src={imgRight}
        alt=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "300px",
          height: "280px",
        }}
      />
    </div>
  );
};

export default LoginPage;

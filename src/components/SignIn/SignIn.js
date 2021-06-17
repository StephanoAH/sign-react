import React, { useContext } from "react";
import styles from "./SignIn.module.css";
import { AccountContext } from "../Account/AccountContext";

function Signin() {
  const { switchToSignup } = useContext(AccountContext);
  return (
    <div className={styles.Container}>
      <form className={styles.FormContainer}>
        <input className={styles.Input} type="email" placeholder="Email" />
        <input
          className={styles.Input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.SubmitBtn}>Sign in</button>
      </form>
      <a className={styles.OffLink} href="#">
        Forget your password?
      </a>
      <p className={styles.OffLink}>
        Don't have an account?
        <a className={styles.HighlightLink} onClick={switchToSignup}>
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Signin;

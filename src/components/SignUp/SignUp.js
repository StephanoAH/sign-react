import React, { useContext } from "react";
import styles from "./SignUp.module.css";

import { AccountContext } from "../Account/AccountContext";

function Signup() {
  const { switchToSignin } = useContext(AccountContext);
  return (
    <div className={styles.Container}>
      <form className={styles.FormContainer}>
        <input className={styles.Input} type="text" placeholder="Full name" />
        <input className={styles.Input} type="email" placeholder="Email" />
        <input
          className={styles.Input}
          type="password"
          placeholder="Password"
        />
        <input
          className={styles.Input}
          type="password"
          placeholder="Confirm password"
        />
        <button className={styles.SubmitBtn}>Sign up</button>
      </form>
      <p className={styles.OffLink}>
        Have an account?
        <a className={styles.HighlightLink} href="#" onClick={switchToSignin}>
          Sign in
        </a>
      </p>
    </div>
  );
}

export default Signup;

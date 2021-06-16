import React from "react";
import style from "./account.module.css";

import Signin from "../SignIn/SignIn";

function Account() {
  return (
    <div className={style.Container}>
      <div className={style.TopContainer}>
        <div className={style.BackDrop} />
        <div className={style.HeaderContainer}>
          <h2 className={style.HeaderText}>Welcome Back</h2>
          <h3 className={style.SubheaderText}>Please sign in to continue!</h3>
        </div>
      </div>
      <div className={style.InnerContainer}>
        <Signin />
      </div>
    </div>
  );
}

export default Account;

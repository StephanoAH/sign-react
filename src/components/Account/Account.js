import React, { useState } from "react";
import { motion } from "framer-motion";
import { AccountContext } from "./AccountContext";

import style from "./account.module.css";
import Signin from "../SignIn/SignIn";
import Signup from "../SignUp/SignUp";

const BackDropVariants = {
  expanded: {
    width: "233%",
    height: "68em",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "33em",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const HeaderContainerVariants = {
  hide: {
    opacity: "0",
  },
  display: {
    opacity: "1",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffnes: 30,
};

function Account() {
  const [isExpanded, setExpanded] = useState(false);
  const [isDisplayed, setDisplayed] = useState(false);
  const [isActive, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setDisplayed(true);
    setTimeout(() => {
      setExpanded(false);
      setDisplayed(false);
    }, expandingTransition.duration * 1000 - 1600);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    });
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    });
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className={style.Container}>
        <div className={style.TopContainer}>
          <motion.div
            className={style.BackDrop}
            initial={false}
            variants={BackDropVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            transition={playExpandingAnimation}
          />
          {isActive === "signin" && (
            <motion.div
              className={style.HeaderContainer}
              initial={false}
              variants={HeaderContainerVariants}
              animate={isDisplayed ? "hide" : "display"}
            >
              <h2 className={style.HeaderText}>Welcome Back</h2>
              <h3 className={style.SubheaderText}>
                Please sign in to continue!
              </h3>
            </motion.div>
          )}
          {isActive === "signup" && (
            <motion.div
              className={style.HeaderContainer}
              initial={false}
              variants={HeaderContainerVariants}
              animate={isDisplayed ? "hide" : "display"}
            >
              <h2 className={style.HeaderText}>Create account</h2>
              <h3 className={style.SubheaderText}>
                Please sign up to continue!
              </h3>
            </motion.div>
          )}
        </div>
        <div className={style.InnerContainer}>
          {isActive === "signin" && <Signin />}
          {isActive === "signup" && <Signup />}
        </div>
      </div>
    </AccountContext.Provider>
  );
}

export default Account;

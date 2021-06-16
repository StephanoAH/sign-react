import React from "react";
import Account from "./components/Account/Account.js";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <Account />
    </div>
  );
}

export default App;

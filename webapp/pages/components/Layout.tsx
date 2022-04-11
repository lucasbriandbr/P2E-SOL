// components/Layout.js

import styles from "../../styles/Layout.module.css"

const Layout = props => (
  <div className={styles.layoutStyle}>
    <div className={styles.contentPage}>
      {props.children}
    </div>
  </div>
);

export default Layout;
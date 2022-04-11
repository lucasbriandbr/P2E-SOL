// components/Layout.js

import styles from "../../styles/Layout.module.css"
import { FunctionComponent } from 'react';

const Layout: FunctionComponent<{ hello: string }> = props => (
  <div className={styles.layoutStyle}>
    <div className={styles.contentPage}>
      {props.children}
    </div>
  </div>
);

export default Layout;
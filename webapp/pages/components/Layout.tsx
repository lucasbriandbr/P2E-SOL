// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from "../../styles/Layout.module.css"

const Layout = props => (
  <div className={styles.layoutStyle}>
    <Header />
    <div className={styles.contentPage}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;
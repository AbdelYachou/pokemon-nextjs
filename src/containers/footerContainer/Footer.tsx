import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2021 Gotta Catch"em all</p>
    </footer>
  );
};

export default Footer;

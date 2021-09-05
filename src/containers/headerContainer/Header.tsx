import React from "react";
import styles from "./header.module.css";
import Logo from "../../../ui/svg/pokemon-logo.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <Logo className={styles.logo} role="img" aria-label="pokemon logo" />
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./PokeballCard.module.css";
import Pokeball from "../../../ui/svg/pokeball.svg";

interface Props {
  children?: JSX.Element | null;
}

const PokeballCard: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={styles.center}>
      <Pokeball
        className={styles.pokeball}
        role="img"
        aria-label="pokemon ball"
      />
      {children}
    </div>
  );
};

export default PokeballCard;

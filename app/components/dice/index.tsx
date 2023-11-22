import { useState } from 'react';
import styles from './styles.module.css';

const getRandom = (max: number, min: number): number => (Math.floor(Math.random() * (max - min)) + min) * 90;

const DicePage = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const rollDice = () => {
    const xRand = getRandom(24, 1);
    const yRand = getRandom(24, 1);
    setRotation({ x: xRand, y: yRand });
  };

  return (
    <div>
      <section className={styles.container}>
        <div
          id="cube"
          className={styles.cube}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onClick={rollDice}
        >
          <div className={`${styles.face} ${styles.front}`}></div>
          <div className={`${styles.face} ${styles.back}`}></div>
          <div className={`${styles.face} ${styles.right}`}></div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </div>
      </section>
      <h1 className={styles.diceText}>Click the dice to roll</h1>
    </div>
  );
};

export default DicePage;

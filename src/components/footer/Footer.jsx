import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>calmDev</div>
      <div className={styles.text}>
        Creative Thoughts Agency © All righs reserved.
      </div>
    </div>
  );
};

export default Footer;

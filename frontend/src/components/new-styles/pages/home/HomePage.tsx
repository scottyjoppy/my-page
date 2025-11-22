import Link from "next/link";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles["welcome-container"]}>
          <div className={styles["welcome-text"]}>
            <h2 className="uppercase">Welcome</h2>
            <p>My name is Alexander Delisle</p>
            <p>I'm here to learn</p>
          </div>
          <div className={styles["image-container"]}>
            <Link href="/about">
              <img
                src="/images/alex-image.jpg"
                alt="a picture of alex"
                className={styles.image}
              />
            </Link>
          </div>
        </div>
        <div className={styles["info-container"]}></div>
      </section>
    </>
  );
};

export default HomePage;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../components/footer-component";
import styles from "../styles/Home.module.css";

import profilePic from "../public/static/kafui-alordo.jpg";
import HeaderComponent from "../components/nav/header.component";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kafui Alordo | Developer, Thinker, Doer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderComponent />
        <div className={styles.bannerContainer}>
          <Image
            src={profilePic}
            alt="my profile photo"
            width={150}
            height={150}
            className={styles.image}
          />
          <div className={styles.bannerHeroTextContainer}>
            <div className={styles.bannerHeroText}>
              <h1>Kafui Alordo</h1>
              <p>Technnology Consulting and Software Engineering | Freelance</p>
            </div>

            <p style={{ fontSize: "1.5rem", color: "#887956" }}>
              I love design, and build impactful software applications based on
              best practieces, for individuals, coporate and organizations.
            </p>
          </div>
        </div>

        {/* <div>
          <h1>Posts</h1>
        </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Title &rarr;</h2>
            <p>Summary Text Here, Coming soon...</p>
          </a>
        </div>

        <div>
          <h1>Projects</h1>
        </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Title &rarr;</h2>
            <p>Summary Text Here, Coming soon...</p>
          </a>
        </div> */}
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;

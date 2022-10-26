import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FooterComponent from "../components/footer-component";
import NavBarComponent from "../components/navbar/navbar.component";
import styles from "../styles/Home.module.css";

import profilePic from "../public/static/kafui-alordo.jpg";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Kafui Alordo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBarComponent />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              maxWidth: "800px",
              padding: "1rem",
            }}
          >
            <div style={{ lineHeight: "1rem", marginBottom: "1rem" }}>
              <h1>| About me</h1>
              {/* <h4 style={{ fontSize: "1rem" }}>Hello! I&apos;m Kafui</h4> */}
            </div>

            <Image
              src={profilePic}
              alt="my profile photo"
              style={{ borderRadius: "10px" }}
            />

            <p style={{ fontSize: "1rem", color: "#887956" }}>
              I&apos;m currently working as an Independent Technology Consultant
              and a Software Engineer in Ho, Volta Region. Helping design, build
              and manage products for clients - () and also provide coaching and
              training for organizations and at workshops.
            </p>

            <p style={{ fontSize: "1rem", color: "#887956" }}>
              Quite recently and in the past I&apos;ve become passionate about
              --Open Source-- and more involved with the Open Source community -
              which am currently contributing to the Odin Project&apos;s
              Curricullum and serving as a member of the Python Software,
              Community, Ghana and as a Dev Lead of Python Ho user group.
            </p>

            <p style={{ fontSize: "1rem", color: "#887956" }}>
              I have built solutions accross mobile and web with modern tech
              stacks.
            </p>

            <span>Aside from being a developer, </span>

            <ul>
              <li>
                <p style={{ fontSize: "1rem", color: "#887956" }}>
                  I like to feed on reading about coffee, breweries and
                  acquiring my first coffee maker machine - I love coffee.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "1rem", color: "#887956" }}>
                  Travelling to volunteer and organize workshops in the
                  developer community - Django/Rails Girls, PyCon events in
                  Ghana.
                </p>
              </li>
              <li>
                <p style={{ fontSize: "1rem", color: "#887956" }}>
                  Coaching, implement base programs for Technology Hubs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default AboutPage;

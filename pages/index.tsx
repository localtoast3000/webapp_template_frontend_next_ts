import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Web application template built with next.js material UI and redux"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Welcome potential user</h1>
        </header>
        <div className={styles.buttonsWrapper}>
          <Button>Sign up</Button>
          <Button>Login</Button>
        </div>
      </main>
    </div>
  );
}

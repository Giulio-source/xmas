import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/risultati/esaltato" className={styles.card}>
            <h2>Esaltato 😁</h2>
          </Link>
          <Link href="/risultati/felice" className={styles.card}>
            <h2>Felice 🥳</h2>
          </Link>
          <Link href="/risultati/indifferente" className={styles.card}>
            <h2>Indifferente 😑</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}

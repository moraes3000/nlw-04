
import { CompletedChallengs } from "../components/CompletedChallengs";
import { Countdown } from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallengs />
          <Countdown />
        </div>

        <div>

        </div>

      </section>
    </div>
  )
}

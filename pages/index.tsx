import Head from 'next/head'
import Image from 'next/image'
import { PlayPause } from '../components/play-pause/play-pause'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Spate</title>
        <meta name="description" content="Cody Spate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
        <h1 className={styles.title}>
          Cody Spate
        </h1>
        <PlayPause/>
        </div>

     
      </main>
    </div>
  )
}

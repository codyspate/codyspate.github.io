import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { PlayPause } from '../components/play-pause/play-pause';
import { Wavy } from '../components/wavy/wavy';
import styles from '../styles/Home.module.css';
const Name = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Spate</title>
        <meta name="description" content="Cody Spate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <Name className={styles.title}>Cody Spate</Name>
          <PlayPause
            onPlay={() => setIsPlaying(!isPlaying)}
            isPlaying={isPlaying}
          />
          <Wavy isWaving={isPlaying} />
        </div>
      </main>
    </div>
  );
}

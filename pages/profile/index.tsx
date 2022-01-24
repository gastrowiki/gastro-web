import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gastro Cooperative</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>Personal Info</li>
          <li>Engagement Stats / Revenue</li>
          <li>Your Videos</li>
          <li>Your Articles</li>
        </ul>
      </main>
    </div>
  )
}

export default Profile

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/About.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About the Gastro Cooperative</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About the Gastro Cooperative
        </h1>
        <h5>Mission</h5>
        <h5>Values</h5>
        <h5>Code of Conduct</h5>
        <h5>How to Contribute</h5>
        <h5>Contributor Roles</h5>
        <h5>Governance</h5>
        <h5>Project Proposals and Lifecycle</h5>
      </main>
    </div>
  )
}

export default About

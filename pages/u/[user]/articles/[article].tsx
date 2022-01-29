import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

const Article: NextPage = () => {
  const router = useRouter()
  const { user, article } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Gastro: Article</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>{user}s recipe: {article}</h3>
      </main>
    </div>
  )
}

export default Article

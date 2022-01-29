import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

const Recipe: NextPage = () => {
  const router = useRouter()
  const { user, recipe } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Gastro: Recipe</title>
        <meta name="description" content="A living history of the world's food written by its people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>{user}s recipe: {recipe}</h3>
      </main>
    </div>
  )
}

export default Recipe

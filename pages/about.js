import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Logo} from "../components/logo"
import {Header} from "../components/header"
import {Link} from "../components/link"
import { Headline } from '@/components/headline'
import { MainTitle } from '@/components/maintitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.description}>

          <Headline  page="about"/>

          <Header />

        </div>

        <MainTitle maintitle="about" />
        <h1>ABOUT PAGE</h1>

        <Logo />

        <Link />
        
      </main>
    </>
  )
}

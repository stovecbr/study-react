import { Inter } from 'next/font/google'
import styles from '@/components/main.module.css'
import { Logo } from '@/components/logo'
import { Header } from '@/components/header'
import { Link } from '@/components/link'
import { Headline } from '@/components/headline'
import { MainTitle } from '@/components/maintitle'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <div>     
      <main className={styles.main}>
        <div className={styles.description}>

          <Headline page={props.page} >
            <code className={styles.code}>pages/{props.page}.js</code>
          </Headline>

          <Header />

        </div>

        <MainTitle maintitle={props.page} />
        <Logo />
        <Link />
        
      </main>
    </div>
  )
}

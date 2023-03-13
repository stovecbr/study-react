import { Inter } from 'next/font/google'
import styles from '@/components/Main.module.css'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Link } from '@/components/Link'
import { Headline } from '@/components/Headline'
import { MainTitle } from '@/components/MainTitle'

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

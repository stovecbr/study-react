import { Inter } from 'next/font/google'
import styles from "./Main.module.css"
import {Logo} from "./Logo"
import {Header} from "./Header"
import {Link} from "./Link"
import { Headline } from "./Headline"
import { MainTitle } from "./MainTitle"

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

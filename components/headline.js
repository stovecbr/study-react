import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  // console.log(props);
  return (
    <div>
          <p>
          🐣🐣🐣🐣🐣🐣Get started by editing&nbsp;
            {/* <code className={styles.code}>pages/{props.page}.js</code> */}
            {props.children}
          </p>
          {/* <button onClick={props.onClick}>ボタン</button> */}
    </div>
  )
}

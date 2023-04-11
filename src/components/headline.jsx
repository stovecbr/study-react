import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <div>
          <p>
          🐣🐣🐣🐣🐣🐣アイテムの数は&nbsp;
            {props.children}個&nbsp;です。
          </p>

          <button onClick={props.handleReduce}>減らす</button>

    </div>
  )
}

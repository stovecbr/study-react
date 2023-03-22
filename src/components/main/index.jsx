import { Inter } from "next/font/google";
import styles from "@/src/components/main/main.module.css";
import { Logo } from "@/src/components/logo";
import { Header } from "@/src/components/header";
import { Link } from "@/src/components/link";
import { Headline } from "@/src/components/headline";
import { MainTitle } from "@/src/components/maintitle";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline page={props.page}>
            <code className={styles.code}>pages/{props.page}.js</code>
          </Headline>

          <Header />
        </div>

        <MainTitle maintitle={props.page} />
        <Logo />
        <Link />
      </main>
    </div>
  );
}

import { Inter } from "next/font/google";
import styles from "@/src/components/main/main.module.css";
import { Logo } from "@/src/components/logo";
import { Header } from "@/src/components/header";
import { Link } from "@/src/components/link";
import { Headline } from "@/src/components/headline";
import { MainTitle } from "@/src/components/maintitle";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs \u2192",
    decription:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn ->",
    decription:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates ->",
    decription:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy ->",
    decription:
      "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline page={props.page}  handleReduce={handleReduce}>
            <code className={styles.code}>{items.length}</code>
          </Headline>

          <Header />
        </div>

        <MainTitle maintitle={props.page} />
        <Logo />
        <Link items={items} />
      </main>
    </div>
  );
}

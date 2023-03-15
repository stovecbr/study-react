import { Inter } from "next/font/google";
import styles from "./link.module.css";

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

export function Link() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>🐕{item.title}</h2>
              <p className={inter.className}>{item.decription}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}

import { Inter } from "next/font/google";
import styles from "@/src/components/link/link.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Link = (props) => {
  return (
    <>
      <div className={styles.grid}>
        {props.items.map((item) => {
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
};

import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/main";
import { HeaderLink } from "@/src/components/HeaderLink";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <HeaderLink />

      <a href="/about" onClick={handleClick}>
        ぼたん
      </a>

      <Main page="index" />
    </>
  );
}

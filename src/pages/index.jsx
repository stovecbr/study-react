import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/main";
import { HeaderLink } from "@/src/components/HeaderLink";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightpink";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <HeaderLink />
      <h1>{count}</h1>
      <button onClick={handleClick}>ぼたん</button>

      <Main page="index" />
    </>
  );
}

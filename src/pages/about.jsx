import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/main";
import { HeaderLink } from "@/src/components/HeaderLink";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgLightPink } from "@/src/hooks/useBgLightPink";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightPink();

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <HeaderLink />

      <button onClick={handleClick}>ぼたん</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      
      {isShow ? <h2>{count}</h2> : null}
      <hr />
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ol>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Main page="about" />
    </>
  );
}

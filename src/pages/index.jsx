import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/main";
import { HeaderLink } from "@/src/components/HeaderLink";

const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <HeaderLink />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ぼたん</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
    </>
  );
}

export default Home;
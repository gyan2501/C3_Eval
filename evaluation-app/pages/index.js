import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await axios.get("https://api.github.com/users/gyan2501");
  const data = res.data;

  return {
    props: {
      data: data,
    },
  };
}

export default function Home(props) {
  //console.log(props.data)
  let data = props.data;
  //console.log(data)
  return (
    <>
      <main className={styles.main}>
        <div>
          <h3>HOME PAGE</h3>
        </div>
        <div>
          <div key={data.id}>
            <Image
              src={data.avatar_url}
              alt="avatar"
              height={200}
              width={200}
            />
            <h3>Name:{data.name}</h3>
            <br />
            <br />
            <p>Bio: {data.bio}</p>
            <br />
            <br />
          </div>

          <button style={{ marginRight: "10px", height: "40px" }}>
            DOWNLOAD RESUME
          </button>
          <br />
          <br />
          <br />
          <h3>TECH STACK</h3>
          <br />
          <button style={{ marginRight: "10px" }}>JS</button>
          <button style={{ marginRight: "10px" }}>HTML</button>
          <button style={{ marginRight: "10px" }}>CSS</button>
          <button style={{ marginRight: "10px" }}>TS</button>
          <button style={{ marginRight: "10px" }}>Next.js</button>
        </div>
      </main>
    </>
  );
}

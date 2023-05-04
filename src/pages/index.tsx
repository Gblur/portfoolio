import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainContent from "../components/Main";
import Container from "@mui/material/Container";

const inter = Inter({subsets: ["latin"]});

// className={`${styles.main} ${inter.className}`}
type HomeProps = {
  checked: boolean;
};

export default function Home({checked}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="md">
        <MainContent checked={checked} />
      </Container>
    </>
  );
}

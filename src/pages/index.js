import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roniel's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

import Content from "@/Components/Content";
import Header from "@/Components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home | CITG</title>
        <meta name="description" content="Part of absurdity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-CITG.webp" />
      </Head>
      <Header />
      <Content />
    </main>
  );
}

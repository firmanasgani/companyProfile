import Carousels from "@/Components/Carousel";
import Content from "@/Components/Content";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Head from "next/head";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
      <div className="content">
        <div className="left-content">
          <motion.div
            animate={{ rotate: 120 }}
            transition={{ type: "spring", velocity: 0.5 }}
          >
            <Image src={logo} alt="" width={300} height={300} />
          </motion.div>
        </div>
        <div className="right-content">
          <h1 style={{ fontWeight: "normal" }}>
            Hi, <br />
            Welcome to{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Pasar malam?", "Kamar mandi?", "Reseller?", "CITG!"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </div>

      <Footer />
    </main>
  );
}

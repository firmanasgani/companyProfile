import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import logo from "@/assets/logo.webp"

export default function Content() {
  return (
    <div className="content">
        <div className="left-content">
            <Image src={logo}
            alt=""
            width={300}
            height={300} />
        </div>
      <div className="right-content">
      <h1 style={{ paddingTop: "5rem", fontWeight: "normal" }}>
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
  );
}

import styles from "../styles/Home.module.css";
import Image from "next/image";
import Linkedin from "../public/linkedin.svg";
import Github from "../public/github.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Matteo Kinkela</h1>
        <p className={styles.description}>Software Engineer</p>
        <div className={styles.iconsRow}>
          <Link
            href="https://www.linkedin.com/in/matteo-kinkela"
            target="_blank"
          >
            <Image
              className="icon"
              src={Linkedin}
              alt="LinkedIn icon"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://github.com/mkinkela1" target="_blank">
            <Image
              className="icon"
              src={Github}
              alt="Github icon"
              width={45}
              height={45}
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

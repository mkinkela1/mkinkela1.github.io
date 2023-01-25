import Image from "next/image";
import Linkedin from "public/linkedin.svg";
import Github from "public/github.svg";
import ProfilePic from "public/profilePicture.webp";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledMain } from "components/Main";
import { TitleRow } from "components/TitleRow";

export default function Home() {
  return (
    <Container>
      <StyledMain className="center">
        <TitleRow>
          <Image
            src={ProfilePic}
            alt="Profile picture"
            width={300}
            height={300}
            className="profilePicture"
          />
          <div className="col">
            <h1 className="title">
              Hi!
              <br />
              I&apos;m <span className="greenText">Matteo</span>,
            </h1>
            <p className="description">a software developer.</p>
          </div>
        </TitleRow>
        <div className="iconsRow">
          <Link
            href="https://www.linkedin.com/in/matteo-kinkela"
            target="_blank"
          >
            <Image src={Linkedin} alt="LinkedIn icon" width={50} height={50} />
          </Link>
          <Link href="https://github.com/mkinkela1" target="_blank">
            <Image src={Github} alt="Github icon" width={45} height={45} />
          </Link>
        </div>
      </StyledMain>
    </Container>
  );
}

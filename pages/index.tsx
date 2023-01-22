import Image from "next/image";
import Linkedin from "public/linkedin.svg";
import Github from "public/github.svg";
import ProfilePic from "public/profilePicture.png";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledMain } from "components/Main";

export default function Home() {
  return (
    <Container>
      <StyledMain>
        <Image
          src={ProfilePic}
          alt="Profile picture"
          width={200}
          height={200}
          className="profilePicture"
        />
        <h1 className="title">Matteo Kinkela</h1>
        <p className="description">Software Engineer</p>
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

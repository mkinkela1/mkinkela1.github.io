import Image from "next/image";
import { LinkedinIcon } from "components/LinkedinIcon";
import { GithubIcon } from "components/GithubIcon";
import ProfilePic from "public/profilePicture.webp";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledMain } from "components/Main";
import { TitleRow } from "components/TitleRow";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
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
            placeholder="blur"
            priority
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
            aria-label="linkedin"
          >
            <LinkedinIcon fill={theme.colors.green} />
          </Link>
          <Link
            href="https://github.com/mkinkela1"
            target="_blank"
            aria-label="github"
          >
            <GithubIcon fill={theme.colors.green} />
          </Link>
        </div>
      </StyledMain>
    </Container>
  );
}

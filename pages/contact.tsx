import React from "react";
import { Container } from "components/Container";
import { StyledPost } from "components/Post";
import { StyledMain } from "components/Main";
import Link from "next/link";

export default function Contact() {
  return (
    <Container>
      <StyledMain className="center">
        <StyledPost>
          <p className="content">
            Hi there! Thank you for visiting my page. I appreciate your interest
            in connecting with me.
          </p>
          <p className="content">
            As a practitioner of Cal Newport&apos;s{" "}
            <Link
              className="link"
              href="https://www.bookdepository.com/Digital-Minimalism-Cal-Newport/9780241453575?ref=grid-view&qid=1675714843477&sr=1-1"
              target="_blank"
            >
              Digital minimalism
            </Link>
            , I do not publicly share my email address. However, I am happy to
            connect with you on{" "}
            <Link
              className="link"
              href="https://www.linkedin.com/in/matteo-kinkela/"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>
          <p className="content">
            Feel free to send me a connection request and message me with any
            questions or comments you may have. I look forward to connecting and
            hearing from you on LinkedIn. Thank you!
          </p>
        </StyledPost>
      </StyledMain>
    </Container>
  );
}

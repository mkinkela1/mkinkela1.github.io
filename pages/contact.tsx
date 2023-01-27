import React from "react";
import { Container } from "components/Container";
import { StyledPost } from "components/Post";
import { StyledMain } from "components/Main";
import Link from "next/link";

export default function Contact() {
  return (
    <Container>
      <StyledMain>
        <StyledPost>
          <p className="content">
            If you have any questions, comments, or just want to say hi,
            I&apos;d love to hear from you. You can get in touch with me by
            filling out the contact form below and I&apos;ll get back to you as
            soon as possible. You can also reach me through my{" "}
            <Link
              className="link"
              href="https://www.linkedin.com/in/matteo-kinkela/"
            >
              LinkedIn
            </Link>
            .
          </p>
        </StyledPost>
      </StyledMain>
    </Container>
  );
}

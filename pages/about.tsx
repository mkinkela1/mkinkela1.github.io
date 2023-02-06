import React from "react";
import { Container } from "components/Container";
import { StyledPost } from "components/Post";
import { StyledMain } from "components/Main";

export default function About() {
  return (
    <Container>
      <StyledMain>
        <StyledPost>
          <div className="title">About me</div>
          <p className="content">
            This page is currently{" "}
            <span className="greenText">under construction</span>. I apologize
            for the inconvenience. I am working diligently to bring you valuable
            content as soon as possible. I truly appreciate your patience and
            understanding. Thank you.
          </p>
        </StyledPost>
      </StyledMain>
    </Container>
  );
}

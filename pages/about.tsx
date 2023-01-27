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
            <span className="greenText">under construction</span>. We apologize
            for the inconvenience and are working hard to bring you valuable
            content as soon as possible. Thank you for your patience.
          </p>
        </StyledPost>
      </StyledMain>
    </Container>
  );
}

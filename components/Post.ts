import styled from "styled-components";

export const StyledPost = styled.div`
  width: calc(100% - 20px);
  min-width: 300px;
  max-width: 800px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .greenText {
    color: #20c997;
  }

  & .link {
    color: #20c997;
    font-weight: bold;
    text-decoration: underline;
    transition: font-size 0.2s linear 0.1s;

    &:hover {
      font-size: 22px;
    }
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    & li::before {
      content: "\\2022";
      color: #20c997;
      font-weight: bold;
      display: inline-flex;
      width: 1em;
      margin-left: -1em;
    }

    & li p {
      display: inline-flex;
      margin: 10px;
    }
  }

  & .title {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.016em;
    line-height: 40px;
    margin-bottom: 10px;
  }

  & .tldr {
    color: #e8eef1;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 400;
  }

  & .content {
    color: #e8eef1;
    font-size: 20px;
    font-weight: 200;
    line-height: 32px;
    letter-spacing: -0.003em;
    text-align: justify;
  }

  & img.coverImage {
    position: relative !important;
    aspect-ratio: auto;
    max-width: inherit;
    margin: 0 auto 30px;
  }
`;

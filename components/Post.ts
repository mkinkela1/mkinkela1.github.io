import styled from "styled-components";

export const StyledPost = styled.div`
  width: calc(100% - 20px);
  min-width: ${(props) => props.theme.width.minWidth};
  max-width: ${(props) => props.theme.width.maxWidth};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .greenText {
    color: ${(props) => props.theme.colors.green};
  }

  & .link {
    color: ${(props) => props.theme.colors.green};
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
      color: ${(props) => props.theme.colors.green};
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
    color: ${(props) => props.theme.colors.white};
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.016em;
    line-height: 40px;
    margin-bottom: 10px;
  }

  & .tldr {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 400;
  }

  & .content {
    color: ${(props) => props.theme.colors.lightGrey};
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

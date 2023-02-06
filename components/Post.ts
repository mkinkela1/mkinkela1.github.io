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
      font-size: 2.2rem;
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

    & li.content {
      margin: 0;
      display: flex;
      gap: 1rem;
    }

    & li div {
      display: inline;
      margin: 0;
    }
  }

  & .title {
    color: ${(props) => props.theme.colors.white};
    font-size: 3.2rem;
    font-weight: 600;
    letter-spacing: -0.016em;
    line-height: 4rem;
    margin-bottom: 10px;
  }

  & .tldr {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 2.2rem;
    line-height: 2.8rem;
    letter-spacing: 0;
    font-weight: 400;
  }

  & .content {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 2rem;
    font-weight: 200;
    line-height: 3.2rem;
    letter-spacing: -0.003em;
    text-align: justify;
    margin-bottom: 3.2rem;
  }

  & img.coverImage {
    position: relative !important;
    aspect-ratio: auto;
    max-width: inherit;
    margin: 0 auto 30px;
  }
`;

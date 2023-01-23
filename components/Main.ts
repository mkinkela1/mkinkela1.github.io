import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: ${(props) => props.theme.width.maxWidth};
  margin: 0 auto;

  & h1.title {
    display: flex;
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    color: ${(props) => props.theme.colors.lightGrey};
    text-align: center;
    align-items: flex-end;

    &.notFound {
      margin-top: 50px;
      font-size: 10rem !important;
    }

    & .greenText {
      color: ${(props) => props.theme.colors.green};
    }
  }

  & .description {
    text-align: center;
    color: ${(props) => props.theme.colors.lightGrey};
    margin: 40px 0;
    line-height: 1.5;
    font-size: 2.2rem;

    &.alignJustify {
      text-align: justify !important;
    }

    & .link {
      color: ${(props) => props.theme.colors.green};
      text-decoration: underline;
    }
  }

  & .iconsRow {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  & .profilePicture {
    margin-bottom: 10rem;
  }
`;

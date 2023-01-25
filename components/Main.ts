import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: ${(props) => props.theme.width.maxWidth};
  margin: 0 auto;

  &.center {
    justify-content: center !important;
    height: calc(100vh - 80px);
  }

  @media (max-width: ${(props) => props.theme.width.maxWidthBreakpoint}) {
    &.center {
      justify-content: flex-start;
      height: auto;
    }
  }

  & h1.title {
    line-height: 1.15;
    font-size: 6rem;
    color: ${(props) => props.theme.colors.lightGrey};
    text-align: left;
    margin: 0;

    &.notFound {
      margin-top: 50px;
      font-size: 10rem !important;
    }

    & .greenText {
      color: ${(props) => props.theme.colors.green};
    }
  }

  & .description {
    color: ${(props) => props.theme.colors.lightGrey};
    line-height: 1.5;
    font-size: 2.2rem;
    margin: 0;

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

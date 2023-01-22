import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;

  & h1.title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    color: #e8eef1;
    text-align: center;

    &.notFound {
      margin-top: 50px;
      font-size: 8rem !important;
    }

    & .greenText {
      color: #20c997;
    }
  }

  & .description {
    text-align: center;
    color: #e8e8e9;
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;

    &.alignJustify {
      text-align: justify !important;
    }

    & .link {
      color: #20c997;
      text-decoration: underline;
    }
  }

  & .iconsRow {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  & .profilePicture {
    margin-bottom: 100px;
  }
`;

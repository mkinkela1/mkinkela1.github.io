import styled from "styled-components";

export const TitleRow = styled.div`
  display: flex;
  gap: 5rem;
  flex-direction: row-reverse;

  & .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.width.maxWidthBreakpoint}) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-bottom: 50px;
  }
`;

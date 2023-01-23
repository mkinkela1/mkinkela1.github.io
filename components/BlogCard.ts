import styled from "styled-components";

export const BlogCard = styled.div`
  width: calc(100% - 20px);
  min-width: ${(props) => props.theme.width.minWidth};
  max-width: ${(props) => props.theme.width.maxWidth};
  margin: 20px 0 0;
  border: ${(props) => props.theme.borders.green};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;

  & .title {
    color: ${(props) => props.theme.colors.white};
    font-size: 2.4rem;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  & .tldr {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: 1.6rem;
    font-weight: lighter;
  }

  & .readMore {
    color: ${(props) => props.theme.colors.green};
    font-size: 1.2rem;
    font-weight: bolder;
    text-decoration: underline;
    text-align: right;
    align-self: flex-end;
  }
`;

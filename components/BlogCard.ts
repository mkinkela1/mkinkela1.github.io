import styled from "styled-components";

export const BlogCard = styled.div`
  width: calc(100% - 20px);
  min-width: 300px;
  max-width: 800px;
  margin: 20px 0 0;
  border: 1px solid #20c997;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & .title {
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 10px;
  }

  & .tldr {
    color: #e8eef1;
    font-size: 16px;
    font-weight: lighter;
  }

  & .readMore {
    color: #20c997;
    font-size: 12px;
    font-weight: bolder;
    text-decoration: underline;
    text-align: right;
    align-self: flex-end;
  }
`;

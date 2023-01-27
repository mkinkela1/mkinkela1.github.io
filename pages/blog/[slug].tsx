import { createClient } from "contentful";
import Image from "next/image";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledPost } from "components/Post";
import { StyledMain } from "components/Main";

interface IParams {
  params: {
    slug: string;
  };
}

interface IContent {
  metadata: {
    tags: string[];
  };
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    tldr: string;
    cover: {
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    };
    content: object;
    slug: string;
  };
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode | string) => (
      <strong className="greenText">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode | string) => (
      <em className="greenText">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode | string) => (
      <ins className="greenText">{text}</ins>
    ),
    [MARKS.CODE]: (text: React.ReactNode | string) => <code>{text}</code>,
    [MARKS.SUPERSCRIPT]: (text: React.ReactNode | string) => <sup>{text}</sup>,
    [MARKS.SUBSCRIPT]: (text: React.ReactNode | string) => <sub>{text}</sub>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
      <p className="content">{children}</p>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol className="content">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className="content">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: any) => (
      <li className="content">{children}</li>
    ),
    [INLINES.HYPERLINK]: ({ data: { uri } }: any, children: any) => (
      <Link href={uri} target="_blank" className="link">
        {children}
      </Link>
    ),
  },
};

export default function Post({ ...content }: IContent) {
  return (
    <Container>
      <StyledMain>
        <StyledPost>
          {content.fields.cover && (
            <Image
              src={content.fields.cover?.fields.file.url}
              alt={content.fields.cover?.fields.title}
              fill
              className="coverImage"
            />
          )}

          <div className="title">{content.fields.title}</div>
          <p className="content">
            {/*// @ts-ignore*/}
            {documentToReactComponents(content.fields.content, options)}
          </p>
        </StyledPost>
      </StyledMain>
    </Container>
  );
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    // @ts-ignore
    paths: data.items.map((post: IContent) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: IParams) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: "test",
    limit: 1,
    "fields.slug": slug,
  });

  return { props: { ...data.items[0] } };
}

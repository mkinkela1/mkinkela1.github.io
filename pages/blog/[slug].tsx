import { createClient, Entry, TagLink } from "contentful";
import Image from "next/image";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledPost } from "components/Post";
import { StyledMain } from "components/Main";
import { Document } from "@contentful/rich-text-types/dist/types/types";

interface IParams {
  params: {
    slug: string;
  };
}

interface IContent {
  metadata: {
    tags: TagLink[];
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
      <div className="content">{children}</div>
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
          <div className="content">
            {documentToReactComponents(
              content.fields.content as Document,
              options
            )}
          </div>
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
    paths: data.items.map(({ fields: { slug } }: Entry<any>) => ({
      params: {
        slug,
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

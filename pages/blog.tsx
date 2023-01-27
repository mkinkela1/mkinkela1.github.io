import { createClient } from "contentful";
import Link from "next/link";
import { Container } from "components/Container";
import { StyledMain } from "components/Main";
import { BlogCard } from "components/BlogCard";

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
    slug: string;
  };
}

interface IData {
  data: IContent[];
}

export default function Blog({ data }: IData) {
  return (
    <Container>
      <StyledMain>
        <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 2)}</pre>
        {data.map((post: IContent) => (
          <BlogCard key={post.sys.id}>
            <div className="title">{post.fields.title}</div>
            <div className="tldr">{post.fields.tldr}</div>
            <Link href={`/blog/${post.fields.slug}`} className="readMore">
              Read more
            </Link>
          </BlogCard>
        ))}
      </StyledMain>
    </Container>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return { props: { data: data.items } };
}

import { Container } from "components/Container";
import { StyledMain } from "components/Main";
import Link from "next/link";
import Image from "next/image";
import Stop from "public/404.webp";
import { TitleRow } from "components/TitleRow";

export default function PageNotFound() {
  return (
    <Container>
      <StyledMain>
        <TitleRow>
          <Image src={Stop} alt="stop" width={200} height={200} />
          <h1 className="title notFound">
            <span className="greenText">4</span>0
            <span className="greenText">4</span>
          </h1>
        </TitleRow>
        <p className="description alignJustify">
          Oops, it looks like you&apos;ve stumbled upon a page that doesn&apos;t
          exist. Don&apos;t worry, it happens to the best of us. But don&apos;t
          let this detour stop you from exploring the rest of the site. Head
          back to the{" "}
          <Link href="/" className="link">
            homepage
          </Link>{" "}
          or check out menu for more options.
        </p>
      </StyledMain>
    </Container>
  );
}

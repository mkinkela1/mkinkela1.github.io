import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "public/menuIcon.svg";
import { useState } from "react";
import RenderWhen from "components/RenderWhen";
import { useRouter } from "next/router";

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const { pathname } = useRouter();

  return (
    <StyledMenu>
      <div className="menuContainer">
        <Image
          src={MenuIcon}
          alt="menu icon"
          width={30}
          height={20}
          className="menuIcon"
          onClick={() => setMenuVisible((prevState) => !prevState)}
        />
        <RenderWhen condition={menuVisible}>
          <ul>
            <li>
              <Link
                href="/"
                className={`menuLink ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`menuLink ${pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`menuLink ${
                  pathname.startsWith("/blog") ? "active" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`menuLink ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </RenderWhen>
      </div>
    </StyledMenu>
  );
}

const StyledMenu = styled.menu`
  width: 100%;
  background: #0f0e0e;
  margin: 0;
  padding: 10px;

  & .menuContainer {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  & img.menuIcon {
    margin: 20px;
    visibility: hidden;

    @media (max-width: 768px) {
      align-self: flex-start;
      visibility: visible;
    }
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    & li {
      padding: 10px 20px;

      & .menuLink {
        color: #e8eef1;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
      }

      & .menuLink:hover {
        color: #20c997;
        transition: color 0.2s linear 0.1s;
      }

      & .menuLink.active {
        color: #20c997;
        text-decoration: underline;
      }
    }
  }
`;

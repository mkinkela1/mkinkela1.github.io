import type { AppProps } from "next/app";
import Head from "next/head";
import Menu from "components/Menu";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "styles/theme-dark";
import { lightTheme } from "styles/theme-light";
import { GlobalStyle } from "styles/globals";
import { useState } from "react";
import { ThemeSwitcher } from "components/ThemeSwitcher";

export enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  return (
    <>
      <Head>
        <title>Matteo Kinkela - software engineer</title>
        <meta name="description" content="Matteo Kinkela - software engineer" />
        <link rel="icon" href="/profilePicture.webp" />
        <meta
          name="google-site-verification"
          content="jI9gtzysCR3p9InY00qz69ZAhR5YrkkjsIn46HBz3OU"
        />
      </Head>
      <ThemeProvider theme={theme === Theme.DARK ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
        <ThemeSwitcher
          t={theme}
          onClick={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
        />
      </ThemeProvider>
    </>
  );
}

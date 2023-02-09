import styled, { useTheme } from "styled-components";
import { Theme } from "pages/_app";
import { SunIcon } from "components/SunIcon";
import { MoonIcon } from "components/MoonIcon";

interface IProps {
  t: Theme;
  onClick: () => void;
}

export function ThemeSwitcher({ t, onClick }: IProps) {
  const theme = useTheme();

  return (
    <StyledThemeSwitcher onClick={onClick} aria-label="theme-switcher">
      {t === Theme.DARK ? (
        <SunIcon fill={theme.colors.green} />
      ) : (
        <MoonIcon fill={theme.colors.green} />
      )}
    </StyledThemeSwitcher>
  );
}

const StyledThemeSwitcher = styled.button`
  all: unset;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
`;

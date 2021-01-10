import { useState } from "react";
import { Container, NavBarLinks, IconMenu, SideBar } from "./styles";

export default function NavBar({ elementRef }) {
  const [isActiveSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <Container elementRef={elementRef}>
        <a href="/">Hyden</a>
        <IconMenu onClick={isActiveSideBar ? () => setActiveSideBar(false) : () => setActiveSideBar(true)} />
        <NavBarLinks>
          <a href="Works">Trabalhos</a>
          <a href="About">Quem somos</a>
          <a href="Blog">Blog</a>
          <button>Contate-nos</button>
        </NavBarLinks>
      </Container>

      <SideBar active={isActiveSideBar}>
        <a href="/">Hyden</a>
          <a href="Works">Trabalhos</a>
          <a href="About">Quem somos</a>
          <a href="Blog">Blog</a>
          <button>Contate-nos</button>
      </SideBar>
    </>
  );
}

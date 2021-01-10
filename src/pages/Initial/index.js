import { useEffect, useState, useRef } from "react";
import NavBar from "../../components/NavBar";
import Section1 from "../../components/_Partials/Section1";
import Section2 from "../../components/_Partials/Section2";
import Section3 from "../../components/_Partials/Section3";
import Section4 from "../../components/_Partials/Section4";

export default function Initial() {
  const elementRef = useRef(null);
  const [top, setTop] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.pageYOffset);
      setState(elementRef.current.offsetTop);
    });
  }, [top]);

  return (
    <>
      {top > state ? <NavBar elementRef={true} /> : <NavBar />}
      <Section1 />
      <Section2 elementRef={elementRef} />
      <Section3 />
      <Section4 />
    </>
  );
}

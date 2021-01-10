import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Container,
  Texts,
  Header,
  CardsWrapper,
  Card,
} from "../../../styles/Blog/styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Blog() {
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
      <Container ref={elementRef}>
        <Header>
          <Image
            src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            className="img"
            priority
            objectFit="cover"
            objectPosition="center"
          />
          <div>
            <p>Nosso Blog</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem minima consequuntur.
            </p>
          </div>
        </Header>

        <Texts>
          <p>Acompanha as novidades</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            error laborum provident facere unde quisquam, nulla minus nostrum
            voluptate corporis!
          </p>
        </Texts>

        <CardsWrapper>
          <Card>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias quia nulla hic, corporis non deserunt saepe? Iste.
            </p>
          </Card>
          <Card>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias quia nulla hic, corporis non deserunt saepe? Iste.
            </p>
          </Card>
          <Card>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias quia nulla hic, corporis non deserunt saepe? Iste.
            </p>
          </Card>
          <Card>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias quia nulla hic, corporis non deserunt saepe? Iste.
            </p>
          </Card>
        </CardsWrapper>
      </Container>

      <Footer />
    </>
  );
}

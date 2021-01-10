import Image from "next/image";
import { Container, ImageWrapper, ContentWrapper } from "./styles";

export default function Section1() {
  return (
    <Container>
      <ImageWrapper>
        <Image
          priority
          className="img"
          src="https://images.pexels.com/photos/3614082/pexels-photo-3614082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
        />
      </ImageWrapper>

      <ContentWrapper>
        <p>THE HAYDEN COLLECTIVE</p>
        <p>Projetamos espaços confortáveis e bem-pensados.</p>
        <button>Conheça nossos trabalhos</button>
      </ContentWrapper>
    </Container>
  );
}

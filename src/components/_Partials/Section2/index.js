import Image from "next/image";
import {
  Container,
  Title,
  Desc,
  CardsWrapper,
  Card,
  ImageBox,
  TitleCard,
  DescCard,
} from "./styles";

export default function Section2({ elementRef }) {
  
  return (
    <Container ref={elementRef}>
      <Title>
        O Hayden Collective emprega os melhores designers e arquitetos do mundo
        para que o seu espaço tenha outro nível.
      </Title>

      <Desc>
        Fotos: cortesia de Alice Gao. Conteúdo apenas para fins de demonstração.
      </Desc>

      <CardsWrapper>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
            />
          </ImageBox>
          <TitleCard>RESIDENCIAL</TitleCard>
          <DescCard>
            Adicione aqui uma descrição dos seus serviços. Cum sociis natoque
            penatibus et magnis dolor sit amet. Natoque penatibus et. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam.
          </DescCard>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/5825553/pexels-photo-5825553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
            />
          </ImageBox>
          <TitleCard>RESIDENCIAL</TitleCard>
          <DescCard>
            Adicione aqui uma descrição dos seus serviços. Cum sociis natoque
            penatibus et magnis dolor sit amet. Natoque penatibus et. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam.
          </DescCard>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/5825537/pexels-photo-5825537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
            />
          </ImageBox>
          <TitleCard>RESIDENCIAL</TitleCard>
          <DescCard>
            Adicione aqui uma descrição dos seus serviços. Cum sociis natoque
            penatibus et magnis dolor sit amet. Natoque penatibus et. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam.
          </DescCard>
        </Card>
      </CardsWrapper>
    </Container>
  );
}

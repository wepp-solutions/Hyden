import Image from "next/image";
import {
  Container,
  DescTop,
  Header,
  HeaderContent,
  TextsTop,
  TitleTop,
  Card,
  ImagesWrapper,
  ImageBox,
} from "./styles";

export default function Section3() {
  return (
    <Container>
      <Header>
        <Image
          className="img"
          src="https://images.pexels.com/photos/5825410/pexels-photo-5825410.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          layout="fill"
          priority
        />
        <HeaderContent>
          <p>Moreau</p>
          <p>MONTREAL</p>
        </HeaderContent>
      </Header>

      <TextsTop>
        <TitleTop>
          Design acolhedor para um brunch clássico no centro da cidade
        </TitleTop>
        <DescTop>
          Use esta seção para descrever um projeto concluído. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
        </DescTop>
      </TextsTop>

      <ImagesWrapper>
        <Card>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/5825543/pexels-photo-5825543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
              className="img"
            />
          </ImageBox>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos amet
            illum dolore voluptate pariatur assumenda, molestias animi expedita
            laudantium quas.
          </p>
        </Card>
        <Card>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              layout="fill"
              priority
              className="img"
            />
          </ImageBox>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos amet
            illum dolore voluptate pariatur assumenda, molestias animi expedita
            laudantium quas.
          </p>
        </Card>
      </ImagesWrapper>

      <ImagesWrapper>
        <Card large>
          <ImageBox large>
            <Image
              src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              priority
              className="img"
            />
          </ImageBox>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos amet
            illum dolore voluptate pariatur assumenda, molestias animi expedita
            laudantium quas.
          </p>
        </Card>
      </ImagesWrapper>
    </Container>
  );
}

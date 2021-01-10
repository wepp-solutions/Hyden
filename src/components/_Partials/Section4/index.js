import Image from "next/image";
import { Container, Header, ImageBox, HeaderContent, Texts } from "./styles";

export default function Section4() {
  return (
    <Container>
      <Header>
        <ImageBox>
          <Image
            className="img"
            src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            priority
          />
          <HeaderContent>
            <p>Pacific Tavern</p>
            <p>BROOKLYN</p>
          </HeaderContent>
        </ImageBox>
      </Header>

      <Texts>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          repudiandae sunt delectus quod modi minus commodi. Magni sint sit iure
          sequi eaque dolorum. Cumque, sit.
        </p>
      </Texts>
    </Container>
  );
}

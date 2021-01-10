import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Container,
  Header,
  CardsWrapper,
  Card,
  ImageBox,
} from "../../../styles/Works/styles";
import NavBar from "../../components/NavBar/index";
import Footer from "../../components/Footer";

export default function Works() {
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
            src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            className="img"
            priority
            objectFit="cover"
            objectPosition="center"
          />
          <div>
            <p>Nossos Trabalhos</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem minima consequuntur.
            </p>
          </div>
        </Header>

        <CardsWrapper>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/433200/pexels-photo-433200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/2029687/pexels-photo-2029687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem est autem earum modi velit!
              </p>
            </div>
          </Card>
        </CardsWrapper>
      </Container>
      <Footer />
    </>
  );
}

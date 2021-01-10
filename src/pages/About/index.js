import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Container,
  Header,
  PeopleWrapper,
  Card,
  ImageBox,
  AboutUs,
} from "../../../styles/About/styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function About() {
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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            priority
            className="img"
            objectPosition="center"
            objectFit="cover"
          />
          <div>
            <p>Quem Somos</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem minima consequuntur.
            </p>
          </div>
        </Header>
        
        <AboutUs top>
          <div>
            <p>Nossa história</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate recusandae doloribus natus ducimus placeat voluptas
              reprehenderit illum ad exercitationem similique omnis cumque
              dicta, repellat quia neque quos voluptatem vitae? Nam?
            </p>
          </div>
        </AboutUs>

        <PeopleWrapper>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectPosition="center"
                objectFit="cover"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum nihil culpa odio ipsa reprehenderit aut, explicabo
                soluta perspiciatis dolores amet.
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectPosition="center"
                objectFit="cover"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum nihil culpa odio ipsa reprehenderit aut, explicabo
                soluta perspiciatis dolores amet.
              </p>
            </div>
          </Card>
          <Card>
            <ImageBox>
              <Image
                src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                layout="fill"
                priority
                objectPosition="center"
                objectFit="cover"
              />
            </ImageBox>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum nihil culpa odio ipsa reprehenderit aut, explicabo
                soluta perspiciatis dolores amet.
              </p>
            </div>
          </Card>
        </PeopleWrapper>

        <AboutUs>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate recusandae doloribus natus ducimus placeat voluptas
              reprehenderit illum ad exercitationem similique omnis cumque
              dicta, repellat quia neque quos voluptatem vitae? Nam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              possimus!
            </p>
          </div>
        </AboutUs>
      </Container>
      <Footer />
    </>
  );
}

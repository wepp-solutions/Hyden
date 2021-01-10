import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  .img {
    filter: brightness(40%);
  }

  > div {
    position: absolute;
    bottom: 20%;
    left: 5%;

    > p:nth-child(1) {
      font-size: clamp(1.9rem, 5vw, 3.7rem);
      font-weight: 500;
      color: #fff;
    }
    > p:nth-child(2) {
      font-size: clamp(1.3rem, 5vw, 1.5rem);
      font-weight: 300;
      max-width: 700px;
      color: #fff;
    }
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px 40px;

  width: 100%;
  margin: 50px auto;
`;
export const Card = styled.div`
  width: min(350px, 95%);
  height: 100%;

  > div {
    > p:nth-child(1) {
      font-size: clamp(1rem, 5vw, 1.2rem);
      margin: 5px 0;
      font-weight: 500;
    }
    > p:nth-child(2) {
      font-size: clamp(0.5rem, 4vw, 1rem);
      margin: 5px 0;
      color: #333;
    }
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

import styled, { css } from "styled-components";

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
    filter: brightness(30%);
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
export const PeopleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 60px 40px;
`;
export const Card = styled.div`
  width: min(30%, 95%);
  height: 100%;

  > div {
    > p:nth-child(1) {
      font-size: clamp(1.5rem, 5vw, 1.5rem);
      margin: 5px 0;
      font-weight: 500;
      color: #333;
    }
    > p:nth-child(2) {
      font-size: clamp(1rem, 5vw, 1.2rem);
      margin: 5px 0;
      color: #333;
    }
  }

  @media (max-width: 950px) {
    width: min(100%, 95%);
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;
export const AboutUs = styled.div`
  width: 95%;
  margin: 30px auto;

  > div {
    width: min(800px, 100%);
    > p:nth-child(1) {
      font-size: clamp(1.4rem, 5vw, 1.6rem);
      font-weight: 400;
      margin: 10px 0;
      color: #222;
    }
    > p:nth-child(2) {
      font-size: clamp(1.1rem, 5vw, 1.2rem);
      font-weight: 300;
      margin: 10px 0;
    }
  }

  ${(props) =>
    props.top &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
        width: 90%;

      > div {
        margin: 0 auto;
        > p:nth-child(1) {
          font-size: clamp(1.9rem, 5vw, 2rem);
          font-weight: 500;
          font-style: italic;
          margin: 10px 0;
          color: #222;
        }
        > p:nth-child(2) {
          font-size: clamp(1.1rem, 5vw, 1.5rem);
          font-weight: 400;
          margin: 10px 5px;
          max-width: 1100px;
          color: #444;
        }
      }
    `}
`;

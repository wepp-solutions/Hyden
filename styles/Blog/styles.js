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
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 70px auto;

    > p:nth-child(1) {
      font-size: clamp(1.5rem, 5vw, 2rem);
      font-weight: 500;
      color: #333;
      padding-bottom: 4px;
      border-bottom: 2px solid #333;
      margin: 0 5px;
    }
    > p:nth-child(2) {
      font-size: clamp(1.1rem, 5vw, 1.4rem);
      font-weight: 400;
      max-width: 800px;
      margin: 20px 5px;
      color: #333;
    }
`
export const CardsWrapper = styled.div`
  width: 95%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px auto;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: min(500px, 100%);
  height: 100%;
  border: 2px solid #333;
  padding: 20px;

  > p:nth-child(1) {
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    font-weight: 500;
    color: #333;
  }
  > p:nth-child(2) {
    font-size: clamp(1.1rem, 5vw, 1.1rem);
    font-weight: 400;
    margin: 10px 0;
    color: #333;
  }

  @media (max-width: 1090px) {
      width: 100%;
  }
`;

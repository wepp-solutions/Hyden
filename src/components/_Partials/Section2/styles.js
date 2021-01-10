import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100px auto;
  height: 100%;

  width: 90%;
`;
export const Title = styled.p`
    font-size: clamp(1.4rem, 5vw, 2rem);
    width: min(800px, 100%);
    letter-spacing: 2px;
    font-style: normal;
    font-weight: 400;
`
export const Desc = styled.p`
    font-size: clamp(1rem, 7vw, 1.3rem);
    width: min(840px, 100%);
    letter-spacing: 1px;
    font-style: normal;
    font-weight: 350;

    margin: 30px 10px;
`
export const CardsWrapper = styled.div`
    margin: 10px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
export const Card = styled.div`
    height: 100%;
    border-radius: 10px;
    width: min(350px, 100%);
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 400px;

    .img {
        object-fit: cover;
        object-position: center;
    }
`
export const TitleCard = styled.p`
    font-size: clamp(1rem, 5vw, 1.6rem);
    margin: 10px 0;
`
export const DescCard = styled.p`
    font-size: clamp(1rem, 5vw, 1rem);
    color: #333;
    margin: 0 20px;
`
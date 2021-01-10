import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 400px;

    .img {
        object-fit: cover;
        object-position: center;
        filter: brightness(60%);
    }
`
export const HeaderContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;

    > p:nth-child(1) {
        font-size: clamp(1.8rem, 5vw, 3.7rem);
    }
    > p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 2rem);
        font-weight: lighter;
    }
`

export const TextsTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`
export const TitleTop = styled.p`
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin: 20px 10px 0px 10px;
    letter-spacing: 2px;
    max-width:700px;
`
export const DescTop = styled.p`
    font-size: clamp(1.2rem, 5vw, 1.2rem);
    max-width: 800px;
    margin: 0px 10px 30px 10px;
`

export const ImagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(900px, 100%);
    height: 100%;
    flex-wrap: wrap;
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);

    .img {
        object-fit: cover;
        object-position: center;
    }

    ${props => props.large && css`
        width: 100%;
        height: 100%;
    `}
`
export const Card = styled.div`
    width: min(100%, 100%);
    height: 100%;
    padding: 10px;
    margin: 20px 0;

    ${props => props.large && css`
        width: 100%;
        height: 500px;
    `}

    > p:nth-child(2n) {
        font-size: clamp(1rem, 5vw, 1.6rem);
        margin: 10px 0;
        font-weight: 500;
        color: #333;
    }
    > p:nth-child(3) {
        font-size: clamp(0.2rem, 5vw, 1.2rem);
        margin: 10px 0;
        color: #333;
    }
`
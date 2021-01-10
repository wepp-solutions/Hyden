import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.div`
    width: 100%;
    height: 400px;
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .img {
        object-fit: cover;
        object-position: center;
        filter: brightness(30%);
    }
`
export const HeaderContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;

    > p:nth-child(1) {
        font-size: clamp(1.7rem, 5vw, 3.5rem);
    }
    > p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 2rem);
        font-weight: 300;
    }
`
export const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    margin: 30px 20px;

    > p:nth-child(1) {
        font-size: clamp(1.4rem, 5vw, 1.8rem);
        color: #333;
    }
    > p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 1.3rem);
        color: #333;
        margin: 20px 5px;
        max-width: 700px;
        font-weight: 300;
    }
`
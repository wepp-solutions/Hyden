import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;
export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .img {
        object-fit: cover;
        object-position: center;
        filter: brightness(40%);
    }
`
export const ContentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;

    > p:nth-child(1) {
        font-size: clamp(1rem, 5vw, 1.6rem);
        font-weight: 300;
        font-style: italic;
        border-bottom: 2px solid #fff;
    }
    > p:nth-child(2) {
        font-size: clamp(1.8rem, 5vw, 3.5rem);
        width: min(800px, 100%);
        font-weight: 300;
        margin: 10px;
    }

    > button {
        padding: 10px 20px;
        margin: 20px 10px;
        border: 2px solid #fff;
        font-size: clamp(0.7rem, 5vw, 1rem);
        color: #fff;
        font-weight: bolder;
        background: transparent;
        transition: 0.5s ease-in-out;

        :hover {
            background: #fff;
            color: #000;
            cursor: pointer;
            transition: 0.5s ease-in-out
        }
    }
`
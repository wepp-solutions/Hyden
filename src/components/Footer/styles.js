import styled from 'styled-components';

export const Container = styled.div`
  background: #201a16;
  width: 100%;
  height: 200px;
  color: #fff;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 30px;

  > p:nth-child(1) {
      font-size: clamp(1.3rem, 5vw, 1.4rem);
      max-width: 500px;
      margin: 0 10px;
  }
  > p:nth-child(2) {
      font-size: clamp(1rem, 5vw, 1.2rem);
      font-weight: 300;
  }
`;

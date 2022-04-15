import React from "react";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
function Home({ img, text, titel }) {
  return (
    <Container img={img}>
      <Fade right>
        <TopSection>
          <h1> {titel} </h1>
          <p>{text}</p>
        </TopSection>
      </Fade>
      <Fade left>
        <BottomSection>
          <div>
            <LeftButton> CUSTOM ORDER </LeftButton>
            <RightButton> EXISTING INVENTORY </RightButton>
          </div>
          <DowenARROW src="/images/down-arrow.svg" alt="" />
        </BottomSection>
      </Fade>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-image: ${(props) => `url("/images/${props.img}")`};

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: space-between;
  background-position: center center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const LeftButton = styled.button`
  padding: 0.7rem 5rem;
  border-radius: 15px;
  font-weight: bolder;
  background-color: rgb(58, 61, 65);
  border: none;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: rgb(230, 231, 229);
  color: rgb(57, 60, 65);
  padding: 0.7rem 4rem;
  margin-left: 2rem;

  @media only screen and (max-width: 600px) {
    margin: auto;
  }
`;

const TopSection = styled.div`
  padding-top: 5rem;
  h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
  }
  p {
    color: rgb(57, 60, 65);
  }
  p a {
    color: rgb(57, 60, 65);
    text-decoration: underline;
  }
`;
const BottomSection = styled.div``;

const DowenARROW = styled.img`
  animation: dowen-animation infinite 1.5s;
  margin-top: 20px;
  height: 40px;
  cursor: pointer;
`;

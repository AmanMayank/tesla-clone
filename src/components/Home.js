import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        bgImage="model-s.jpg"
        title=""
        description=""
        leftBtntext=""
        rightBtnText=""
      />
      <Section
        bgImage="model-s.jpg"
        title=""
        description=""
        leftBtntext=""
        rightBtnText=""
      />
      <Section
        bgImage="model-s.jpg"
        title=""
        description=""
        leftBtntext=""
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

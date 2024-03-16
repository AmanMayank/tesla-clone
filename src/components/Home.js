import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        bgImage="model-s.jpg"
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtntext="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImage="model-y.jpg"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtntext="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImage="model-3.jpg"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtntext="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImage="model-x.jpg"
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtntext="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        bgImage="solar-panel.jpg"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtntext="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        bgImage="solar-roof.jpg"
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtntext="Order Now"
        rightBtnText="Learn more"
      />

      <Section
        bgImage="accessories.jpg"
        title="Accessories"
        description=""
        leftBtntext="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

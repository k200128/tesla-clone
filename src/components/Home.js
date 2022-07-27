import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
  return (
      <Container>
          <Section
         title="Model S" 
         description= "Order Online for Touchless Delivery "
         backgroundImg="model-s.jpg"
          leftButtonTtext= "Custom order"
          rightButtonText= "Existing Inventory "

          />
          <Section
           title="Model Y" 
           description= "Order Online for Touchless Delivery "
           backgroundImg="model-y.jpg"
            leftButtonTtext= "Custom order"
            rightButtonText= "Existing Inventory "
          />
          <Section
          title="Model 3" 
          description= "Order Online for Touchless Delivery "
           backgroundImg="model-3.jpg"
           leftButtonTtext= "Custom order"
           rightButtonText= "Existing Inventor"
          />
          <Section
          title="Model X" 
          description= "Order Online for Touchless Delivery "
          backgroundImg="model-x.jpg"
           leftButtonTtext= "Custom order"
           rightButtonText= "Existing Inventor"
          />
          <Section
          title="Lowest Cost Solar Panels in Australia" 
          description= "Money-back guarantee "
          backgroundImg="solar-panel.jpg"
           leftButtonTtext= "Order now"
           rightButtonText= "Learn more"
          />
           <Section
          title="Solar for New Roofs" 
          description= "Solar Roof Costs Less Than a new Roof Plus Solar Panels  "
          backgroundImg="solar-roof.jpg"
           leftButtonTtext= "Order now"
           rightButtonText= "Learn more"
          />
           <Section
          title="Accessories" 
          description= ""
          backgroundImg="accessories.jpg"
           leftButtonTtext= "Shop now"
           
          />
      </Container>
    
  )
}

export default Home
const Container = styled.div`
height :100vh
`
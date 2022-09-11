import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import ModelS from "./images/model-s.jpg"
import ModelY from "./images/model-y.jpg"
import Model3 from "./images/model-3.jpg"
import ModelX from "./images/model-x.jpg"
import SolarPanel from "./images/solar-panel.jpg"
import SolarRoof from "./images/solar-roof.jpg"
import Accessories from "./images/accessories.jpg"
function Home() {
  return (
      <Container>
          <Section
         title="Model S" 
         description= "Order Online for Touchless Delivery "
         backgroundImg= {ModelS}
          leftButtonTtext= "Custom order"
          rightButtonText= "Existing Inventory "

          />
          <Section
           title="Model Y" 
           description= "Order Online for Touchless Delivery "
           backgroundImg={ModelY}
            leftButtonTtext= "Custom order"
            rightButtonText= "Existing Inventory "
          />
          <Section
          title="Model 3" 
          description= "Order Online for Touchless Delivery "
           backgroundImg={Model3}
           leftButtonTtext= "Custom order"
           rightButtonText= "Existing Inventor"
          />
          <Section
          title="Model X" 
          description= "Order Online for Touchless Delivery "
          backgroundImg={ModelX}
           leftButtonTtext= "Custom order"
           rightButtonText= "Existing Inventor"
          />
          <Section
          title="Lowest Cost Solar Panels in Australia" 
          description= "Money-back guarantee "
          backgroundImg={SolarPanel}
           leftButtonTtext= "Order now"
           rightButtonText= "Learn more"
          />
           <Section
          title="Solar for New Roofs" 
          description= "Solar Roof Costs Less Than a new Roof Plus Solar Panels  "
          backgroundImg={SolarRoof}
           leftButtonTtext= "Order now"
           rightButtonText= "Learn more"
          />
           <Section
          title="Accessories" 
          description= ""
          backgroundImg={Accessories}
           leftButtonTtext= "Shop now"
           
          />
      </Container>
    
  )
}

export default Home
const Container = styled.div`
height :100vh
`
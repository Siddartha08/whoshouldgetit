import React from "react";
import Section2 from "./section2";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function HeroSection(props) {
  return (
    <Section2
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />

      
      </Container>
    </Section2>
  );
}

export default HeroSection;

/*
<LinkContainer to={props.buttonPath}>
<Button variant={props.buttonColor} size="lg">
  {props.buttonText}
</Button>
</LinkContainer>
*/
import React from "react";
import Section from "./Section";
import Section2 from "./section2";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";

function HeroSection2(props) {
  return (
    <Section2
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      height={props.height}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />
      </Container>
    </Section2>
  );
}

export default HeroSection2;

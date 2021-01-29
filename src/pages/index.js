import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Who Should Receive The Vaccine First?"
        subtitle="Join us in this thought experiment"
        buttonText="Get Started"
        buttonColor="light"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle="Select one below"
      />
    </>
  );
}

export default IndexPage;

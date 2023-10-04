import React from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";

const ParticleBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = ({ theme }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particleParams = theme === "light" ? ConfigLight : ConfigDark;

  return (
    <ParticleBox>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        options={particleParams}
        init={particlesInit}
      />
    </ParticleBox>
  );
};

export default ParticlesComponent;

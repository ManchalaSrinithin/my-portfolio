import React from "react";
import { TechCard } from "../Projects/ProjectCard/ProjectCardElements";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <TechCard
        style={{ fontWeight: "700", width: "300px", textAlign: "center" }}
      >
        
        <a
          href="https://www.linkedin.com/in/manchala-srinithin-83746926b/"
          target="_blank"
          rel="noreferrer"
        >
          SRI NITHIN
        </a>
      </TechCard>
    </footer>
  );
}

export default Footer;

import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Aeler from "../../Assets/Projects/aeler.png";
import Alufire from "../../Assets/Projects/alufire.png";
import Lemonade from "../../Assets/Projects/lemonade.png";
import Oomnitza from "../../Assets/Projects/oomnitza.png";
import Propertysimple from "../../Assets/Projects/propertysimple.png";
import Thinknum from "../../Assets/Projects/thinknum.png";
import Recess from "../../Assets/Projects/recess.png";
import Unore from "../../Assets/Projects/unore.png";
import Zilculator from "../../Assets/Projects/zilculator.png";

const projects = [
  {
    image: Aeler,
    title: "AELER",
    link: "https://www.aeler.com",
    description:
      "Aeler provides an advanced smart container solution for shipping, offering increased payload, native insulation, full visibility, enhanced security, and sustainability to streamline and secure global logistics.",
  },
  {
    image: Alufire,
    title: "ALUFIRE",
    link: "https://www.alufire.com",
    description:
      "Alufire specializes in designing and manufacturing high-quality fire-resistant systems, including partitions, doors, and technical windows, providing enhanced safety and protection in architectural projects.",
  },
  {
    image: Lemonade,
    title: "Lemonade",
    link: "https://www.lemonade.com",
    description:
      "Lemonade is a modern insurance company that uses technology and artificial intelligence to offer affordable and user-friendly home, renters, pet, and life insurance, with a focus on transparency and social good.",
  },
  {
    image: Oomnitza,
    title: "Oomnitza",
    link: "https://www.oomnitza.com/",
    description:
      "Oomnitza provides an Enterprise Technology Management solution that helps IT organizations manage and automate their technology assets and workflows, improving efficiency, compliance, and visibility across the entire IT lifecycle.",
  },
  {
    image: Propertysimple,
    title: "PROPERTYSIMPLE",
    link: "https://www.propertysimple.com",
    description:
      "PropertySimple uses AI to automate real estate marketing and lead follow-up, helping agents manage social media, email, and text campaigns efficiently.",
  },
  {
    image: Thinknum,
    title: "Thinknum",
    link: "https://www.thinknum.com",
    description:
      "Thinknum aggregates alternative data from online sources to provide business insights, enabling users to track company performance and market trends.",
  },
  {
    image: Recess,
    title: "Recess",
    link: "https://takearecess.co",
    description:
      "Recess offers CBD-infused beverages designed to promote relaxation, mental clarity, and balance.",
  },
  {
    image: Unore,
    title: "Unore",
    link: "https://unore.io",
    description:
      "Unore provides a decentralized financial platform for secure digital asset management, including trading and staking.",
  },
  {
    image: Zilculator,
    title: "Zilculator",
    link: "https://www.zilculator.com",
    description:
      "Zilculator offers detailed property analysis for real estate investors, providing comprehensive financial and market data for informed decision-making.",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          {projects.map(({image, title, description, link}) => (
            <Col key={title} md={6} className="project-card">
              <ProjectCard
                imgPath={image}
                isBlog={false}
                title={title}
                description={description}
                link={link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

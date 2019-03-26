import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

import * as Styled from './About.style';
import fatherDaughter from '../../img/father_daughter.png';

const About = () => (
  <Row
    mx={0}
    px={15}
    pt={{xs:"120px", sm:"130px", lg:"140px", xl:"155px"}}
    pb="20px"
  >
    <Col
      px={0}
      xs={12}
      sm={10}
      osm={1}
      lg={8}
      olg={2}
      my={0}
      mx="auto"
    >
      <Box
        as="header"
        role="banner"
      >
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col>
            <Styled.SectionHeading
              as="h1"
              style={{textAlign:"center"}}
            >
              About Me&nbsp;

            </Styled.SectionHeading>
            <Styled.Paragraph style={{textAlign:"center"}}>
              Hello, thanks for visiting my website. My name is Thien, and I'm 25 years old. If you are interested in finding out more about me, my interests, projects or skills, please browse around.
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
      <Box
        as="main"
        role="main"
      >
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        backgroundColor="#191919"
        p={20}
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "left"}}
          >
            <Styled.SectionHeading
              white
            >
              Curious&nbsp;
              <br className="break-large"/>
              Mind&nbsp;
              <span 
                role="img" 
                aria-label="Curious face emoji"
              >
                  🤔
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              Ever since I was a little kid, I was very curious about the world. I've always been intrigued by how everything works the way they do. My favorite subjects in school were mathematics, physics, and programming. 
              <br></br>
              <br></br>
              I've always been amazed at the way technologies have progressed throughout my life and the impact it has on us. As a kid, I've always dreamed of being able to work in the tech industry and work on the latest technologies.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}    
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "left"}}
          >
            <Styled.SectionHeading>
              Computer Science&nbsp;
              <span 
                role="img" 
                aria-label="Programmer emoji"
              >
                💻
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph>
              Computer Science has provided a way for me to link my passion in technology and my creativity. I enjoy using my creativity to provide thoughtful solutions to modern-day problems by innovation. I am a highly motivated individual that's passionate about self-development, leadership, and building a better future.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        backgroundColor="#191919"
        p={20}
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "left"}}
          >
            <Styled.SectionHeading
              white
            >
              Web&nbsp;
              <br className="break-large"/>
              Dev.&nbsp;
              <span 
                role="img" 
                aria-label="Curious face emoji"
              >
                🌐
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              Designing for the web is not a job ,it's a lifestyle. As technology evolves, so does the challenge. I have a passion for learning new technologies and updating my skillset. I love bringing my designs to life in HTML, CSS & Javascript, also acting like a mad scientist.
              <br></br>
              <br></br>
              So in the last year and half I learned a lot of cool stuff related to front-end and back-end development. I used that knowledge to build my portfolio and this website. I know a lot about NodeJS, ExpressJS, MongoDB, jQuery, React, Redux, Bootstrap, HTML, CSS, CSS-in-JS, responsive design, progressive enhancement, a11y, mobile-first design, module bundling, RESTful architecture, API's and more.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}  
        >
          <Col
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "left"}}
          >
            <Styled.SectionHeading>
              Proud&nbsp; 
              <br className="break-large"/>
              Father 
              <span 
                role="img" 
                aria-label="Father and son emoji"
              >
                👨‍👦
              </span>
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={8}
            mt={{xs:"20px", md:"0"}}
          >
            <img 
              src={fatherDaughter} 
              alt="My son sitting on my shoulders on the shore of river Krka"
              style={
                {
                  display: 'block',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />     
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        backgroundColor="#191919"
        p={20}   
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "left"}}
          >
            <Styled.SectionHeading
              white
            >
              Favorite&nbsp;
              <br className="break-large"/>
              Quote&nbsp;
              <span 
                role="img" 
                aria-label="Planet earth emoji"
              >
                💬
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
               <i>"Working hard for something we don’t care about is called stress; working hard for something we love is called passion."--Simon Sinek</i>
              <br />
              <br />              
              Simon Sinek inspired me to realize my passion and made me want to achieve true fullfilment in the work that I do. I truly believe that having passion in your work is what will help you achieve what you never thought possible.&nbsp;
              
              </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
     
    </Col>
  </Row>
);

export default About;
import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import TextLoop from 'react-text-loop';

import * as Styled from './Home.style';
import { Linkedin, Github, Medium, Gmail } from '../index';

const Home = () => (
  <React.Fragment>  
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
          <Styled.Heading>
            Hello World.&nbsp;
            <br className="break-large"/>
            My name is
            Thien Nguyen.&nbsp;
            <br className="break-large"/>
            I'm&nbsp;
            <br className="break-under-xs"/>
            <TextLoop
              interval={2500}
              springConfig={{ stiffness: 30, damping: 10 }}
              mask
            >
              <span>
                a Web Developer
              </span>
              <span>
                an Engineer
              </span>
              <span>
                a Boba Addict
              </span>
              <span>
                a Snowboarder
              </span>
              <span>
                a Foodie
              </span>
              <span>
                a Tech Geek
              </span>
              <span>
                a Book Worm
              </span>
              <span>
                a Gamer
              </span>
            </TextLoop>&nbsp;
            <br className="break-small"/>
            from&nbsp;
            <span>
              <a
                href="https://www.google.com/maps/place/Fresno,+CA/@36.7854513,-119.9346459,11z/data=!3m1!4b1!4m5!3m4!1s0x80945de1549e4e9d:0x7b12406449a3b811!8m2!3d36.7377981!4d-119.7871247"
                target="_blank"
                rel="noopener noreferrer"
                className="city-link"
                aria-label="Location of Zagreb google maps"
              >
                <span
                  tabIndex="-1"
                  className="city-link_content"
                >
                  Fresno.
                </span>
              </a>
            </span>
          </Styled.Heading>
        </Box>
      </Col>
    </Row>
    <Row
      mx={0}
      mt={{xs: "20px", md: "35px", lg:"45px"}}
      px={15}
    >
      <Col
        px={0}
        maxWidth="1100px"
        width="100%"
        my={0}
        mx="auto"
        as="section"
        role="region"
      >
        <Styled.SocialParagraph>
          Connect with me
        </Styled.SocialParagraph>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          mb={15}
        >
          <Styled.SocialLink 
            href="https://www.linkedin.com/in/thien-nguyen-24a203100/
            "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Linkedin />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://github.com/skipdisk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Github />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://www.facebook.com/chop559"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Medium />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="mailto:thiennguyen.skipdisk@gmail.com?subject=Business proposal"
            aria-label="Send email to thiennguyen.skipdisk@gmail.com"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Gmail />
            </span>
          </Styled.SocialLink >
        </Box>
      </Col>
    </Row>
  </React.Fragment>  
);

export default Home;
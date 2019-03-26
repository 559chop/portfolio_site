import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';

import * as Styled from './Portfolio.style';
import scrumImage from '../../img/scrum.jpg';
import quotesImage from '../../img/quotes.jpg';
import portfolioImage from '../../img/portfolio.jpg';

import { Javascript, Html, Css, Node, Mongodb, Jquery, ReactIcon, GithubPages } from '../index';

const Portfolio = () => (
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
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
            xs={12}
          >
            <Styled.SectionHeading
              as="h1"
            >
              I'm currently looking for work!
            </Styled.SectionHeading> 
            <Styled.Paragraph
              email
            >
              Feel free to contact me at&nbsp;
              <a 
                href="mailto:Thiennguyen.skipdisk@gmail.com?subject=Business proposal"
                aria-label="Send email to Thiennguyen.skipdisk@ispoljaric.com"
              >
                <span
                  className="email-link_content"
                  tabIndex="-1"
                >
                  Thiennguyen.Skipdisk@gmail.com
                </span>
              </a>.
            </Styled.Paragraph>        
          </Col>
        </Row>
      </Box>
      <Box
        as="main"
        role="main"
      >
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={scrumImage} 
              alt="scrum app"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >
            <Styled.SectionHeading>
              ScrumBag
            </Styled.SectionHeading>     
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <ReactIcon/>
              <Javascript />
              <Html />
              <Css />
              <Node />
              <Mongodb />
            </Styled.UsedTech>
            <Styled.Paragraph>
            A Trello style task management app to help users track progression and organize workflow.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/skipdisk/Scrumbag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ScrumBag Code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://project-management-5a141.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scrumbag Demo"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  Demo
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={quotesImage} 
              alt="quotes App"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >     
            <Styled.SectionHeading>
              Quotes Generator
            </Styled.SectionHeading>  
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <Javascript />
              <Jquery />
              <Html />
              <Css />
              <ReactIcon/>
              <GithubPages/>
            </Styled.UsedTech>
            <Styled.Paragraph>
            A simple quote machine that generates a random quotes from a quotes API and displayed with a React front end.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/skipdisk/quotes_machine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quotes machine code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://skipdisk.github.io/quotes_machine/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="News digest live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  Demo
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={portfolioImage} 
              alt="quotes App"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >     
            <Styled.SectionHeading>
              Portfolio Site
            </Styled.SectionHeading>  
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <ReactIcon/>
              <Javascript />
              <Html />
              <Css />
              <Javascript />
              <GithubPages/>
            </Styled.UsedTech>
            <Styled.Paragraph>
            Personal website built with responsive design and PWA guidelines.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/skipdisk/portfolio_site"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="porfolio code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="portolio site"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  Demo
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
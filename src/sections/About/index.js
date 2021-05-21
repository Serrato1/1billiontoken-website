import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import { FaGooglePlay, FaApple, FaMoneyBill, FaToiletPaper } from "react-icons/fa";

import aboutImage from 'assets/images/about/about.svg';



import AboutSectionWrapper from './about.style';




const About = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                        <Col className="lg-5 md-6 sm-12">
                            <Image src={aboutImage} className="about-image" alt="cryptik about image" />
                        </Col>
                        <Col className="lg-6 offset-lg-1 md-6 sm-12">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            Better than Bitcoin?<br/>1 Billion Token
                                        </Heading>
                                    </SectionBackground>
                                    
                                    <Text>We are a token that distributes money to its holders and make you profit.<br/><b>For Each Transaction:</b> </Text>
                                    {/* <Text>For Each Transaction</Text> */}

                                </SectionTitle>  

                                <Box className="about-list">
                                    <Text as="span">8% is Redistributed to Holders.</Text>
                                    <Text as="span">2% is Added to the Liquidity Pool</Text>
                                    <Text as="span">2% is burned Forever</Text>
                                </Box>

                                <Box className="about-btn-wrapper">
                                    <Link href="#" ><a className="btn btn-fill"> <FaMoneyBill /> Buy Now</a></Link>
                                    <Link href="/white-paper"><a className="btn"><FaToiletPaper /> White Paper</a></Link>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default About;
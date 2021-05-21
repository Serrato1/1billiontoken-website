import React, { useState } from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Button from "reusecore/Button";
import Input from "reusecore/Form/Input";
import { SectionTitle } from "reusecore/SectionTitle";

import WhitePaperWrapper from "./whitepaper.style";


const WhitePaper = () => {
  return (
    <WhitePaperWrapper id="contact">
      <Container>
        <Row>
          <Col className="col-12">
            <Box className="pdf-viewer-container">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ3Kq3Jxnf4o-whZ7aYf6MIvf37lT3WuQ40F5B6kBlxOQftecw7EJiTOMQ7PhxE9MvjkJpsNwpQLT7z/embed?start=false&loop=false&delayms=3000" frameborder="0"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </Box>
          </Col>
        </Row>
      </Container>
    </WhitePaperWrapper>
  );
};

export default WhitePaper;

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";
import logo from "assets/images/logo/billion_logo.svg";
import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        {/* <Subscribe /> */}
        <Container>
          <Row>
            <Col className="lg-4 sm-6">
              <Box className="footer-widgets company-desc">
                <Image src={logo} alt="cryptik footer logo" />
                <Text>
                  The best things in life aren't free.
                </Text>

                <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope />1billiontoken@gmail.com{" "}
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      {" "}
                      <FaPhoneAlt /> coming soon..{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-4 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Community</Heading>
                <List>
                  <ListItem>
                    <Link href="https://www.facebook.com/juan.bill.946/">
                      <a>Facebook</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://t.me/x1billion">
                      <a>Telegram</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://instagram.com/1billiontoken">
                      <a>Instagram</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://twitter.com/1billiontoken">
                      <a>Twitter</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-4 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Resources</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>Price</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Token</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>About</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>FAQ</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Team</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/white-paper">
                      <a>WhitePaper</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <a> {item.icon} </a>
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; 1BillionToken | All right rserved 2021</Text>
                <Text as="span">
                  Designed By{" "}
                  <Link href="#">
                    <a>SerratoTech</a>
                  </Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;

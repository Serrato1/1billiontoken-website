import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import Moment from 'react-moment';

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateNow = new Date(date+' '+time);
var dateFuture = new Date("05/25/2021 12:00:00");
let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
const CoinFund = () => {

  const settings = { 
    count: diffInMilliSeconds,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    You Buy<br/>You Earn, That Simple.
                  </Heading>
                </SectionBackground>
                <Text>
                  - Highest Redistribution Percentage on the market  <br/>
                  - Passively Earn Coins By Holding<br/>
                  - Anti Whale Algorithm (see source code)
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
                <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x34d74a40b32def4c428e567608c36ed774e801c1">
                  <a className="btn btn-fill">Buy Token</a>
                </Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              {/* <CountdownTimer {...settings} /> */}
              <div class="powr-countdown-timer" id="602f9b75_1621965772"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
            </Box>
            <Text style={{textAlign:'center'}}>Market Cap</Text>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$150,000</Text>
              </Box>
              <Text as="span">$1,000,000,000</Text>
            </Box>

            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;

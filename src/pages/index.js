import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Button } from "rebass"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IoIosArrowDown } from "react-icons/io"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Row from "../components/Row"
import "../components/flipbox.module.css"
import styles from "../components/flipbox.module.css"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import Testimonials from "../components/testimonials"
import {
  IoIosBulb,
  IoMdRadioButtonOn,
  IoIosCard,
  IoIosPeople,
  IoMdTrendingUp,
} from "react-icons/io"
import HeroBackground2 from "../components/HeroBackground2"
import headSeperator from "../images/heading-seperator.png"
import WhiteHeadSeparator from "../images/heading-seperator-white.png"
import codingImg from "../images/Programming-And-Coding-mmw.jpg"
import onlineMarketing from "../images/Online-Marketing-mmw.jpg"
import emailHosting from "../images/email-hosting-mmw.jpg"
import HeroMap from "../images/hero-map.png"
import StarAgency from "../images/5-star-agency-img.png"
import CustomerSupport from "../images/support.png"
import ChooseBg from "../images/choose-bg.jpg"
import { P, H1, Wrap } from "../components/serviceComponents"
import Flipbox from "../components/Flipbox"

const HeroLeft = styled.div({
  flex: "1 1 60%",
})
const HeroRight = styled.div({
  flex: "1 1 40%",
})

const HeroTop = styled.div({
  display: "flex",
})

const HeroCounter = styled.div({
  display: "flex",
  textAlign: "center",
  alignItems: "unset",
  background: "rgba(0, 0, 0, 0.62)",
  padding: "20px",
  borderRadius: "20px",
  margin: "70px 0",
})
const HeroItem = styled.div({
  flex: "1 1 20%",
  p: {
    fontSize: "20px",
    lineHeight: "30px",
  },

  h3: {
    fontSize: "40px",
    fontWeight: 600,
  },
})

const FullRow = styled(Row)({
  width: "100%",
  maxWidth: "100%",
  padding: "0px",

  H1: {
    color: "#fff",
    position: "relative",
    zIndex: 9999,
  },
  img: {
    position: "relative",
    marginBottom: "20px",
  },
})

const MakeRow = styled(Row)({
  textAlign: "center",
  padding: "80px 0 ",
})

const MakeContainer = styled(Row)({
  textAlign: "left",
  display: "flex",
  padding: "10px 0px 30px",
})

const MakeImg = styled(Row)({
  display: "flex",
})

const AboutImg = styled.div({
  flex: "1 1 33%",
  padding: "0px 8px",

  img: {
    width: "100%",
  },
})
const ChooseImg = styled.div({
  display: "flex",
  paddingTop: "35px",
  color: "#fff",
})
const Item = styled.div({
  flex: "1 1 20%",
  zIndex: 9999,
})

const ChooseStyle = {
  backgroundImage: `url(${ChooseBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  backgroundAttachment: "fixed",
}

const Overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  left: "0px",
  top: "0px",
}
const View = styled.div({})

const iconStyle = css({
  width: "100px",
  height: "100px",
  border: "2px dashed #fff",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "100%",
})

const Left = styled.div({
  flex: "1 1 50%",
  textAlign: "right",
  padding: "0px 10px",
  borderRight: "2px dashed #ddd",
})

const Right = styled.div({
  flex: "1 1 50%",
  padding: "0px 10px",
})

const MakeService = styled(Row)({
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  padding: "0px",
  H1: {
    color: "#000",
  },
})

const LeftService = styled.div({
  flex: "1 1 25%",
  padding: "0px 30px",
  P: {
    marginBottom: "30px",
  },
})

const RightService = styled.div({
  flex: "1 1 75%",
})

const InstaContainer = styled.div({})

const Hero = styled.div({
  minHeight: `100vh`,
  display: "flex",
  alignItems: "flex-end",
  position: "relative",
  color: "#fff",
})

const HeroRow = styled(Row)({
  paddingTop: 20,
  paddingBottom: 20,
  zIndex: 1,
  position: "relative",
})

const HeroH1 = styled.h1({
  fontSize: 35,
  fontWeight: 700,
  maxWidth: 680,
  lineHeight: 1.4,
  marginTop: 0,
  marginBottom: 20,
  height: "98px",
})

const HeroP = styled.p({
  fontSize: 20,
  fontWeight: 400,
  maxWidth: 480,
  lineHeight: 1.5,
  marginBottom: 40,
})

const Content = styled.div({
  background: `#fff`,
})

const Btn = styled(Button)({
  marginRight: 15,
  borderRadius: `0`,
  background: `#ed1c24`,
  padding: `13px 25px`,
  cursor: "pointer",
  fontFamily: `Montserrat, -apple-system, BlinkMacSystemFont, Arial, sans-serif`,
})

const anchorCss = css({
  position: "absolute",
  bottom: 0,
  left: `50%`,
  transform: `translateX(-50%)`,
  background: "none",
  border: 0,
  padding: 10,
})

const IndexPage = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout alternateHeader>
      <Seo title="Home" />

      <Hero>
        <div
          css={{
            background: "#000",
            position: "fixed",
            width: `100%`,
            height: `100%`,
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {isBrowser && <HeroBackground2 />}
        </div>
        <HeroRow>
          <HeroTop>
            <HeroLeft>
              <HeroH1>
                <TypistLoop interval={2000} count={100}>
                  {[
                    "If it's not done to perfection, don't do it at all.",
                    "Happy Clients in All States & Territories",
                    "Let's build a future out of the History",
                    "Your Ambition together with our engagement leads to business growth",
                    "Speak with Our Specialists to expand your social reach",
                  ].map(text => (
                    <Typist key={text} startDelay={20}>
                      {text}
                      <Typist.Backspace count={100} delay={20} />
                    </Typist>
                  ))}
                </TypistLoop>
              </HeroH1>
              <HeroP>
                We build successful responsive sites that genuinely connect with
                your target audience.
              </HeroP>
              <Btn>Contact Us</Btn>
            </HeroLeft>
            <HeroRight>
              <img src={HeroMap} alt="Australia Map" />
            </HeroRight>
          </HeroTop>
          <HeroCounter>
            <HeroItem>
              <h3>1,000+</h3>
              <p>Happy Clients</p>
            </HeroItem>
            <HeroItem>
              <h3>10+</h3>
              <p>Years of Expertise</p>
            </HeroItem>
            <HeroItem>
              <h3>100%</h3>
              <p>Australian Owned</p>
            </HeroItem>
            <HeroItem>
              <img src={StarAgency} alt="5 Star Rated Web Design Agency" />{" "}
              <p>5-star rated Web Design Agency</p>
            </HeroItem>
            <HeroItem>
              <img src={CustomerSupport} alt="Exceptional Customer Support" />
              <p>Exceptional Customer Service</p>
            </HeroItem>
          </HeroCounter>
        </HeroRow>
        <AnchorLink href="#content" css={anchorCss}>
          <IoIosArrowDown fill="#fff" size="40" />
        </AnchorLink>
      </Hero>

      <Content id="content">
        <Wrap>
          <MakeRow>
            <H1>About Make My Website</H1>
            <img src={headSeperator} alt="head-seperator" />
            <P></P>
            <P>We Don’t Just Build Websites, We Build Your Online Business!</P>
            <MakeContainer>
              <Left>
                <P>
                  Make My Website is a digital agency made up of extremely
                  talented, highly trained and skilled professionals who work
                  with you to create your online presence and are dedicated to
                  meet the goals and guidelines to deliver your project.
                </P>
              </Left>
              <Right>
                <P>
                  We are a small team of experts who is willing to work your way
                  to help you succeed online.
                </P>
              </Right>
            </MakeContainer>
            <MakeImg>
              <AboutImg>
                <img src={codingImg} alt="Web Development" />
              </AboutImg>
              <AboutImg>
                <img src={onlineMarketing} alt="Online Marketing" />
              </AboutImg>
              <AboutImg>
                <img src={emailHosting} alt="Seo" />
              </AboutImg>
            </MakeImg>
          </MakeRow>

          <FullRow style={ChooseStyle}>
            <View style={Overlay} />
            <MakeRow>
              <H1>Why Choose Us</H1>
              <img src={WhiteHeadSeparator} alt="head-seperator" />
              <ChooseImg>
                <Item>
                  <IoIosBulb css={iconStyle} />
                  <P>We have Futuristic Approach</P>
                </Item>
                <Item>
                  <IoMdRadioButtonOn css={iconStyle} />
                  <P>We Aim to Excel</P>
                </Item>
                <Item>
                  <IoIosCard css={iconStyle} />
                  <P>We Understand Your Identity</P>
                </Item>
                <Item>
                  <IoIosPeople css={iconStyle} />
                  <P>We Make It Personal</P>
                </Item>
                <Item>
                  <IoMdTrendingUp css={iconStyle} />
                  <P>We are Result Driven</P>
                </Item>
              </ChooseImg>
            </MakeRow>
          </FullRow>

          <FullRow className={styles.fullrow}>
            <MakeService className={styles.makeservice}>
              <LeftService>
                <H1>Services</H1>
                <img src={headSeperator} alt="head-seperator" />
                <P>
                  Elevate Your Businesses Capabilities With One Step. We offer a
                  wide variety of website design services.
                </P>
                <Link to="/services" className={styles.mmwbtn}>
                  View All Services
                </Link>
              </LeftService>
              <RightService className={styles.rightservice}>
                <Flipbox />
              </RightService>
            </MakeService>
          </FullRow>
          <FullRow style={ChooseStyle}>
            <View style={Overlay} />
            <MakeRow>
              <Testimonials />
            </MakeRow>
          </FullRow>
          <MakeRow>
            <H1>Follow Us On Instagram</H1>
            <img src={headSeperator} alt="head-seperator" />
            <InstaContainer></InstaContainer>
          </MakeRow>
        </Wrap>
      </Content>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Row from "../components/Row"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

export const color = `#ED1D25`

export const P = styled.p({
  lineHeight: "28px",
  marginTop: "0px",
  marginBottom: "15px",
})

export const H1 = styled.h1({
  fontSize: "48px",
  marginBottom: "20px",
  marginTop: "0px",
  fontWeight: 800,
})

export const H3 = styled.h3({
  fontSize: "27px",
  marginTop: "0px",
  lineHeight: "40px",
  marginBottom: "10px",
})

export const Wrap = styled.div({})

export const ServiceHead = styled(Row)({
  textAlign: "center",
  paddingTop: "80px",

  img: {
    marginBottom: "25px",
  },
})

export const Section = styled(Row)({
  display: "flex",
})

export const Content = styled.div({
  flex: `1 1 50%`,
  padding: "30px",
})

export const BgWrap = styled.div({
  flex: `1 1 50%`,
  maxWidth: `50%`,
  position: "relative",
})

export const Bg = styled.div(
  {
    position: "absolute",
    right: 0,
    height: `100%`,
    width: `100%`,
    backgroundSize: "cover",
  },
  props => {
    return {
      backgroundImage: `url(${props.src})`,
      left: props.right && 0,
      right: !props.right && 0,
    }
  }
)

export const Image = ({ ...props }) => (
  <BgWrap>
    <Bg {...props} />
  </BgWrap>
)

export const List = styled.ul({
  paddingLeft: "0px",
})

export const Li = styled.li({
  listStyleType: "none",
  fontSize: "15px",
  lineHeight: "26px",
  paddingBottom: "7px",
  paddingLeft: 20,
})

export const iconStyle = css({
  position: "absolute",
  marginLeft: -20,
  marginTop: 5,
})

export const Item = ({ children, ...props }) => (
  <Li {...props}>
    <IoIosCheckmarkCircleOutline css={iconStyle} color={color} />
    {children}
  </Li>
)

export const ServiceBottom = styled(Row)({
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "80px",
})

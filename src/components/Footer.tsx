import styled, {css} from "styled-components";
import { ReactComponent as FbSvg } from '../images/socials/facebook.svg';
import { ReactComponent as LiSvg } from '../images/socials/linkedIn.svg';
import { ReactComponent as PrSvg } from '../images/socials/pinterest.svg';
import { ReactComponent as TwSvg } from '../images/socials/twitter.svg';
import SmileWrapper from './Smile';

interface SizeProps {
    height?:number;
  }

interface positionProps {
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
  }

const Footer = styled.footer<SizeProps>`
    height: ${({ height = 150 }) => height}px;
    width: 100vw;
    position:absolute;
    bottom:0;
    left:0;
    margin:0;
    background: #FAFAFA;
    border:1px solid #D8D8D8
`

const SocialsWrapper=styled.div`
z-index:2;
margin:60px 0 0 250px;
a{
  margin-left:20px
}
`

const pAbsoluteStyle = css<positionProps>`
  position:absolute;
  top: ${({ top }) => top ? top+"px" : "auto"};
  bottom: ${({ bottom }) => bottom ? bottom+"px" : "auto"};
  left: ${({ left }) => left ? left+"px" : "auto"};
  right: ${({ right }) => right ? right+"px" : "auto"};
  `

export default () => (
  <Footer>
    <SocialsWrapper>
      <a><LiSvg/></a>
      <a><TwSvg/></a>
      <a><FbSvg/></a>
      <a><PrSvg/></a>
    </SocialsWrapper>
    
  </Footer>
)

import styled, {css} from "styled-components";
import { ReactComponent as FbSvg } from '../images/socials/facebook.svg';
import { ReactComponent as LiSvg } from '../images/socials/linkedIn.svg';
import { ReactComponent as eyeSvg } from '../images/smiles/eye.svg';
import { ReactComponent as TongueSvg } from '../images/smiles/tongue.svg';
import { ReactComponent as FaceSvg } from '../images/smiles/face.svg';

interface positionProps {
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
  }

  interface sizeProps {
    height:number;
    width: number;
  }

const pAbsoluteStyle = css<positionProps>`
  position:absolute;
  top: ${({ top }) => top ? top+"px" : "auto"};
  bottom: ${({ bottom }) => bottom ? bottom+"px" : "auto"};
  left: ${({ left }) => left ? left+"px" : "auto"};
  right: ${({ right }) => right ? right+"px" : "auto"};
  `

const sizeStyle = css<sizeProps>`
  position:absolute;
  height: ${({ height }) => height ? height+"px" : "auto"};
  width: ${({ width }) => width ? width+"px" : "auto"};
  `

const Bg = styled(FaceSvg)<{height:number,width: number, fill?: string}>`
  ${sizeStyle}
  fill:${({fill})=>fill ?? "black"};
`
const Eye = styled(eyeSvg)`
  fill: white;
  height: calc(100% / 6);
  width: calc(100% / 6);
`

const LeftEye = styled(Eye)<{width: number}>`
  position:absolute;
  margin-left: ${({width})=>width/6}px;
  margin-top: ${({width})=>width/2.4}px;
`
const RightEye = styled(Eye)<{width: number}>`
  position:absolute;
  margin-left: ${({width})=>width/3}px;
  margin-top: ${({width})=>width/5}px;
`

const Tongue = styled(TongueSvg)<{width: number}>`
    position:absolute;
    fill: white;
    height: calc(100% / 4);
    width: calc(100% / 4);
    margin-left: ${({width})=>width/2.4}px;
    margin-top: ${({width})=>width/2.2}px;
`
interface smileProps extends positionProps, sizeProps {
    faceW?:number;
    faceH?:number;
    faceL?:number;
    faceT?:number;
    rotate?:number;
    fill?:string;
}

const Smile = styled.div<smileProps>`
    fill: black;
    z-index: 1000;
    transform: rotate(${({rotate})=>rotate ?? 0}deg);
    ${pAbsoluteStyle}
    ${sizeStyle}
`
interface faceProps extends positionProps, sizeProps {}

const Face = styled.div<faceProps>`
  ${sizeStyle}
  ${pAbsoluteStyle}
`


export default (props: smileProps) => (
    <Smile {...props}>
        <Bg viewBox=  "1 1 8 8" {...props}/>
        <Face width={props.faceW ?? props.width} height = {props.faceH  ?? props.height} top = {props.faceT} left = {props.faceL}>
            <LeftEye viewBox=  "1 1 8 8" width = {props.width}/>
            <RightEye viewBox=  "1 1 8 8" width = {props.width}/>
            <Tongue viewBox=  "1 1 8 8" width = {props.width}/>
        </Face>
       
    </Smile>
)

import styled, {css} from "styled-components";
import SmileWrapper from "./Smile"
import getDimensions from "./tools/getDimensions"

export default () => {
    const { height, width } = getDimensions();
    return (
        <div>
            <SmileWrapper bottom={-40} left={40} height= {200} width= {200} rotate = {0} fill = {"#F472B7"}/>
            <SmileWrapper top={200} right={Math.min(400, -(500 - width))} height= {200} width= {200} rotate = {0} fill = {"#F472B7"}/>
            <SmileWrapper top={20} left={20} height= {100} width= {100} faceH = {40} faceW = {40} faceL = {10} fill = {"#FAD34F"}/>
        </div>
        
    )
}


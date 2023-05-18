import { styled } from '@storybook/theming';
import { lightColors } from 'styles/colors';

export const StyledDiv = styled.div`
  // background: red;

.nodes g > line {
display: none !important;
}

.label .classTitle > div {
margin-top: 12px !important;
}

.classTitle {
height: 48px !important;
}

rect {
    fill: ${lightColors.lightGrey} !important;
    stroke: ${lightColors.lightGrey} !important;
}

.green > rect {
    fill: ${lightColors.lightGreen} !important;
    stroke: ${lightColors.lightGreen} !important;
}

.blue > rect {
    fill: ${lightColors.blue} !important;
    stroke: ${lightColors.blue} !important;
}

`
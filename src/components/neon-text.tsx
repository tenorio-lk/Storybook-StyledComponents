import React, { FC, ReactElement } from "react";
import styled, { keyframes } from "styled-components";

type NeonTextProps = {
  text: string;
};

export const NeonText: FC<NeonTextProps> = (props): ReactElement => {
  const { text } = props;
  return (
    <MainWrapper>
      <NeonTextWrapper>
        <Text text={text}>{text}</Text>
        <Gradient />
        <Dodge />
      </NeonTextWrapper>
    </MainWrapper>
  );
};

type TextProps = { text: string };

const MainWrapper = styled.main`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

const NeonTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  filter: brightness(300%);
  overflow: hidden;
`;

const Text = styled.span<TextProps>`
  color: #ffffff;
  background: #000000;
  font-size: 200px;
  font-weight: bold;
  font-family: Arial;
  text-transform: uppercase;

  &::before {
    content: ${(props) => `'${props.text}'`};
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(3px);
  }
`;

const Gradient = styled.span`
  background: linear-gradient(
    114.5793141156962deg,
    rgba(6, 227, 250, 1) 4.927083333333334%,
    rgba(229, 151, 64, 1) 97.84374999999999%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;

const dodgeArea = keyframes`
  to {
    transform: translate(50%,50%);
  }
`;

const Dodge = styled.span`
  background: radial-gradient(circle, white, black 35%) center / 25% 25%;
  position: absolute;
  top: -100%;
  left: -100%;
  right: 0;
  bottom: 0;
  mix-blend-mode: color-dodge;
  animation: ${dodgeArea} 3s linear infinite;
`;

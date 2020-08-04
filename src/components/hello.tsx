import React, { FC } from "react";
import styled from "styled-components";

type HelloProps = {
  message: string;
};

export const Hello: FC<HelloProps> = (props) => {
  const { message } = props;
  return (
    <HelloWrapper>
      <StyledText>{message}</StyledText>
    </HelloWrapper>
    // <div className="hello-wrapper">
    //   <p className="styled-text">{message}</p>
    // </div>
  );
};

const HelloWrapper = styled.div`
  background-color: grey;
`;

const HelloOverwrited = styled(HelloWrapper)`
  background-color: red;
`;

const StyledText = styled.p`
  font-size: 3rem;
  font-style: italic;
  border: solid 10px red;
`;

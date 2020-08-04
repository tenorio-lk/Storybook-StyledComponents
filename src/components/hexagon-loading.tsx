import React, { FC, ReactElement } from "react";
import styled, {
  keyframes,
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

type HexagonLoadingProps = { color?: string; size?: number; time?: number };

const loadingStructure = [
  [
    { direction: "up", placed: "outer", id: 18 },
    { direction: "down", placed: "outer", id: 17 },
    { direction: "up", placed: "outer", id: 16 },
    { direction: "down", placed: "outer", id: 15 },
    { direction: "up", placed: "outer", id: 14 },
  ],
  [
    { direction: "up", placed: "outer", id: 1 },
    { direction: "down", placed: "outer", id: 2 },
    { direction: "up", placed: "inner", id: 6 },
    { direction: "down", placed: "inner", id: 5 },
    { direction: "up", placed: "inner", id: 4 },
    { direction: "down", placed: "outer", id: 13 },
    { direction: "up", placed: "outer", id: 12 },
  ],
  [
    { direction: "down", placed: "outer", id: 3 },
    { direction: "up", placed: "outer", id: 4 },
    { direction: "down", placed: "inner", id: 1 },
    { direction: "up", placed: "inner", id: 2 },
    { direction: "down", placed: "inner", id: 3 },
    { direction: "up", placed: "outer", id: 11 },
    { direction: "down", placed: "outer", id: 10 },
  ],
  [
    { direction: "down", placed: "outer", id: 5 },
    { direction: "up", placed: "outer", id: 6 },
    { direction: "down", placed: "outer", id: 7 },
    { direction: "up", placed: "outer", id: 8 },
    { direction: "down", placed: "outer", id: 9 },
  ],
];

const defaultColor = "#fd7000";
const defaultSize = 12;
const defaultTime = 1;

export const HexagonLoading: FC<HexagonLoadingProps> = (
  props
): ReactElement => {
  return (
    <MainWrapper>
      <DarkLoader>
        {loadingStructure.map((row) => (
          <Row>
            {row.map((arrow) => (
              <Arrow
                // color={props.color || defaultColor}
                // size={props.size || defaultSize}
                // time={props.time || defaultTime}
                {...props}
                className={`${arrow.direction} ${arrow.placed}-${arrow.id}`}
                //           'down outer-5' | 'up inner-2'
              />
            ))}
          </Row>
        ))}
      </DarkLoader>
    </MainWrapper>
  );
};

type ArrowProps = { color?: string; size?: number; time?: number };

/**
 * Creates a personalized className to component children of an animation-delay with the cycles and time passed as arguments
 * @param placed inner/outer
 * @param cycles number of cycles
 * @param time time lapse
 */
const createClasses = (placed: string, cycles: number, time: number) => {
  let styles = "";
  for (let i = 1; i < cycles; i++)
    styles += `
    &.${placed}-${i} {
      animation-delay: ${-(time / cycles) * i}s;
    }
  `;
  return styles;
};

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const DarkLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const blink = keyframes`
  0% { opacity: 0.1; }
  30% { opacity: 1; }
  100% { opacity: 0.1; }
`;

const Arrow = styled.div.attrs((props: ArrowProps) => ({
  color: props.color || defaultColor,
  size: props.size || defaultSize,
  time: props.time || defaultTime,
}))<ArrowProps>`
  width: 0;
  height: 0;
  margin: ${(props): string => `0 ${-props.size / 2}px`};
  border-left: ${(props): string => `${props.size}px solid transparent`};
  border-right: ${(props): string => `${props.size}px solid transparent`};
  border-bottom: ${(props): string =>
    `${props.size * 1.8}px solid ${props.color}`};
  ${(props): FlattenSimpleInterpolation =>
    css`
      animation: ${blink} ${props.time}s infinite;
    `}
  filter: ${(props): string =>
    `drop-shadow(0 0 ${props.size * 1.5}px ${props.color})`};

  &.down {
    transform: rotate(180deg);
  }

  ${(props): string => createClasses("outer", 18, props.time)}

  ${(props): string => createClasses("inner", 6, props.time)}
`;

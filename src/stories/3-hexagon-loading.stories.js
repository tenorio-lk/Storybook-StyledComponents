import React from "react";
import { HexagonLoading } from "../components/hexagon-loading";

export default {
  title: "Hexagon Loading",
  component: HexagonLoading,
};

export const HexagonalLoadingDefaultValues = () => <HexagonLoading />;

export const HexagonalLoadingCyan = () => <HexagonLoading color="#00d9fd" />;

export const HexagonalLoadingRed = () => <HexagonLoading color="#fd0000" />;

export const HexagonalLoading8px = () => <HexagonLoading size={8} />;

export const HexagonalLoading24px = () => <HexagonLoading size={24} />;

export const HexagonalLoading32px = () => <HexagonLoading size={32} />;

export const HexagonalLoadingQuarterOneSec = () => (
  <HexagonLoading time={0.25} />
);

export const HexagonalLoadingHalfOneSec = () => <HexagonLoading time={0.5} />;

export const HexagonalLoadingTwoSec = () => <HexagonLoading time={2} />;

export const HexagonalLoadingFiveSec = () => <HexagonLoading time={5} />;

export const HexagonalExample = () => (
  <HexagonLoading color="blue" time={1.25} size={18} />
);

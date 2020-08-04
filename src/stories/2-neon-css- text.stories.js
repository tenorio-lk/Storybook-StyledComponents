import React from "react";
import { NeonText } from "../components/neon-text";

export default {
  title: "Neon CSS Text Examples",
  component: NeonText,
};

export const TextExample = () => <NeonText text="hey" />;

export const HelloWorld = () => <NeonText text="Hello World" />;

export const NightClub = () => <NeonText text="Night Club" />;

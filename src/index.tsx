import React from "react";
import { divStyle } from './index.css'

type BerriesProps = {
  name?: string;
};

export const Berries = ({ name = "stranger" }: BerriesProps) => (
  <div className={divStyle}>Hello, {name}. I'm built with aqu 🌊!</div>
);

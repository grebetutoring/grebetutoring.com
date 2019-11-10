import React from "react";
import { DefaultTheme, ThemeProperties } from "holderjs";
import "holderjs";

export function AddPlaceholderTheme(name: string, props: ThemeProperties) {}

// theme: The theme to use for the placeholder. Example: holder.js/300x200?theme=sky
// random: Use random theme. Example: holder.js/300x200?random=yes
// bg: Background color. Example: holder.js/300x200?bg=2a2025
// fg: Foreground (text) color. Example: holder.js/300x200?fg=ffffff
// text: Custom text. Example: holder.js/300x200?text=Hello
// size: Custom text size. Defaults to pt units. Example: holder.js/300x200?size=50
// font: Custom text font. Example: holder.js/300x200?font=Helvetica
// align: Custom text alignment (left, right). Example: holder.js/300x200?align=left
// outline: Draw outline and diagonals for placeholder. Example: holder.js/300x200?outline=yes
// lineWrap: Maximum line length to image width ratio. Example: holder.js/300x200?lineWrap=0.5

export class RGBColor {
  r: number;
  g: number;
  b: number;
  constructor();
  constructor(r: number, g: number, b: number);
  constructor(v: [number, number, number]);
  constructor(
    r: number | [number, number, number] = 1,
    g: number = 1,
    b: number = 1
  ) {
    if (Array.isArray(r)) {
      [r, g, b] = r;
    }
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toString() {
    return (
      Math.round(this.r * 255).toString(16) +
      Math.round(this.g * 255).toString(16) +
      Math.round(this.b * 255).toString(16)
    );
  }
}

export type Color = string | number | RGBColor;

export interface SrcStringProps {
  [k: string]: any;
  text?: string;
  theme?: DefaultTheme | string;
  bg?: Color;
  fg?: Color;
  size?: number;
  font?: string;
  align?: AlignSetting;
  outline?: "yes";
  lineWrap?: number;
  nowrap?: "true";
  auto?: "yes";
  textmode?: "literal" | "exact";
}

export interface BasePlaceholderProps extends SrcStringProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

export interface StaticPlaceholderProps extends BasePlaceholderProps {
  width: number;
  height: number;
}

export interface HorizontalFluidPlaceholderProps extends BasePlaceholderProps {
  widthPct: number;
  height: number;
}

export interface VerticalFluidPlaceholderProps extends BasePlaceholderProps {
  width: number;
  heightPct: number;
}

export type PlaceholderImageProps =
  | StaticPlaceholderProps
  | HorizontalFluidPlaceholderProps
  | VerticalFluidPlaceholderProps;

function isHFluid(
  props: PlaceholderImageProps
): props is HorizontalFluidPlaceholderProps {
  return "widthPct" in props;
}

function isVFluid(
  props: PlaceholderImageProps
): props is VerticalFluidPlaceholderProps {
  return "heightPct" in props;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = props => {
  let srcStr = "holder.js/";

  if (isHFluid(props)) {
    srcStr += `${props.widthPct}px${props.height}?`;
  } else if (isVFluid(props)) {
    srcStr += `${props.width}x${props.heightPct}p?`;
  } else {
    srcStr += `${props.width}x${props.height}?`;
  }

  for (const key in props as SrcStringProps) {
    let v = props[key];
    if (v instanceof RGBColor) {
      v = v.toString();
    }
    srcStr += `&${key}=${v}`;
  }

  return <img src={srcStr} alt={props.alt} className={props.className} />;
};

/// <reference types="react-scripts" />

declare module "*.md" {
  const content: any;
  export default content;
}

declare module "holderjs" {
  import { Color } from "csstype";

  // domain: The domain to use for image generation. Default value: holder.js.
  // dataAttr: The HTML attribute used to define a fallback to the native src
  //           attribute. Default value: data-src.
  // renderer: The renderer to use. Options available: svg, canvas. Default
  //           value: svg.
  // images: The CSS selector used for finding img tags. Default value: img.
  // objects: The CSS selector used for finding object placeholders. Default
  //          value: object.
  // bgnodes: The CSS selector used for finding elements that have background
  //          placeholders. Default value: body .holderjs.
  // stylenodes: The CSS selector used for finding stylesheets to import into
  //             SVG placeholders. Default value: head//link.holderjs.
  // noFontFallback: Do not fall back to canvas if using custom fonts.
  // noBackgroundSize: Do not set background-size for background placeholders.

  export interface Options {
    domain?: string;
    dataAttr?: string;
    renderer?: "svg" | "canvas";
    images?: string;
    bgnodes?: string;
    stylenodes?: string;
    noFontFallback?: string;
    noBackgroundSize?: string;
  }

  export type DefaultTheme =
    | "sky"
    | "vine"
    | "lava"
    | "gray"
    | "industrial"
    | "social";

  export interface ThemeProperties {
    fg?: Color;
    bg?: Color;
    size?: number;
    font?: string;
    fontweight?: "normal" | "bold" | number;
  }

  interface Holder {
    run(options: Options): void;
    addTheme(name: string, props: ThemeProperties): Holder;
    addImage(src: string, cssSelector: string): Holder;
  }

  export default Holder;
}

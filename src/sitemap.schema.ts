export interface Sitemap {
  readonly $schema?: "./sitemap.schema.json";
  readonly version: "1.0.0";
  readonly navIcon: NavIcon;
  readonly homepage: PageRef;
  readonly pages: PageRef[];
}

interface NavIcon {
  readonly src: string;
  readonly alt: string;
}

interface PageRef {
  readonly name: string;
  readonly target: string;
  readonly markdown?: string;
}

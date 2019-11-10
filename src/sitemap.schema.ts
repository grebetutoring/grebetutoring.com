export interface Sitemap {
  readonly $schema?: string;
  readonly version?: string;
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

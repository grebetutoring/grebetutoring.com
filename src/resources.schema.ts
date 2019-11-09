/**
 * A definition for a resources.json file for grebetutoring.com
 */
export interface Resources {
  $schema?: "./schema.json";
  version: "1.0.0";

  /**
   * Names sections of resource links
   */
  sections: ResourceSection[];
}

/**
 * A named section of resource links
 */
export interface ResourceSection {
  /**
   * Section title as a readable string
   */
  title: string;

  /**
   * Collection of related links
   */
  links: ResourceLink[];

  /**
   * Hidden notes
   */
  notes?: any;
}

/**
 * A resource link
 */
export interface ResourceLink {
  /**
   * Displayable title for the link
   */
  title: string;

  /**
   * Active URL for the link
   */
  url: string;

  /**
   * Displayable text description of the link
   */
  description: string;

  /**
   * Hidden notes
   */
  notes?: any;
}

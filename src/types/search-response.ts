export interface SearchResults {
  context: Context;
  items: Item[];
  kind: string;
  queries: Queries;
  searchInformation: SearchInformation;
  url: URL;
}

export interface Context {
  title: string;
}

export interface Item {
  cacheId: string;
  displayLink: DisplayLink;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  kind: Kind;
  link: string;
  pagemap?: Pagemap;
  snippet: string;
  title: string;
}

export enum DisplayLink {
  WWWGoogleCOM = "www.google.com",
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
  cse_image?: CSEImage[];
  cse_thumbnail?: CSEThumbnail[];
  metatags: Metatag[];
  organization?: Organization[];
  service?: Service[];
}

export interface CSEImage {
  src: string;
}

export interface CSEThumbnail {
  height: string;
  src: string;
  width: string;
}

export interface Metatag {
  "apple-mobile-web-app-capable"?: string;
  "apple-mobile-web-app-status-bar-style"?: string;
  "apple-mobile-web-app-title"?: string;
  "application-name"?: string;
  "format-detection"?: string;
  google?: string;
  "mobile-web-app-capable"?: string;
  "msapplication-config"?: string;
  "msapplication-tap-highlight"?: string;
  "og:description"?: string;
  "og:image"?: string;
  "og:image:secure_url"?: string;
  "og:locale"?: string;
  "og:site_name"?: string;
  "og:title"?: string;
  "og:type"?: string;
  "og:url"?: string;
  referrer?: string;
  "twitter:card"?: string;
  "twitter:creator"?: string;
  "twitter:description"?: string;
  "twitter:image"?: string;
  "twitter:site"?: string;
  "twitter:title"?: string;
  "twitter:url"?: string;
  viewport: string;
}

export interface Organization {
  sameas: string;
}

export interface Service {
  name: string;
}

export interface Queries {
  nextPage: NextPage[];
  previousPage: NextPage[];
  request: NextPage[];
}

export interface NextPage {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  searchTerms: string;
  startIndex?: number;
  title: string;
  totalResults: string;
}

export interface SearchInformation {
  formattedSearchTime: string;
  formattedTotalResults: string;
  searchTime: number;
  totalResults: string;
}

export interface URL {
  template: string;
  type: string;
}

import type { BlogPost } from '../../i18n/types';

export type BlogBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; text: string; href: string };

export interface BlogPostFull extends BlogPost {
  /** SERP title (≤60 chars). On-page H1 uses `title`. */
  seoTitle?: string;
  featured?: boolean;
  author?: string;
  body: BlogBlock[];
}

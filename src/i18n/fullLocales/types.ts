import type { BlogBlock } from '../../data/blog/types';
import type { SiteFaqItem } from '../../data/faq';
import type { ForumPost } from '../../data/forum';
import type { DeepPartial } from '../merge';
import type { Translations } from '../types';

export interface LocalizedProductCopy {
  overview?: { title?: string; paragraphs?: string[] };
  goodToKnow?: string;
  limitations?: string;
  fullFeatures?: string[];
  acquisition?: { title?: string; steps?: { title: string; desc: string }[] };
  body?: { type: string; text: string }[];
  about?: { type: string; text: string }[];
  images?: { caption?: string; captionDesc?: string; alt?: string }[];
}

export interface LocaleContentBundle {
  /** Merged over `en` via mergeTranslations */
  ui?: DeepPartial<Translations>;
  blog?: Record<
    string,
    {
      title?: string;
      desc?: string;
      tag?: string;
      readTime?: string;
      seoTitle?: string;
      body?: BlogBlock[];
    }
  >;
  forum?: {
    categories?: { name: string }[];
    posts?: ForumPost[];
  };
  faqs?: SiteFaqItem[];
  faqSectionCopy?: {
    full?: { eyebrow: string; title: string; subtitle: string; filterAll: string };
    contextual?: { eyebrow: string; title: string; subtitle: string };
  };
  products?: Record<string, LocalizedProductCopy>;
}
